import { useRef, useEffect } from "react";
import * as d3 from "d3";

type TreeEntry = {
  name: string;
  children?: TreeEntry[];
};

const data: TreeEntry = {
  name: "tag 1",
  children: [
    { name: "title 1", children: [{ name: "title 3" }, { name: "title 4" }] },
    { name: "title 5" },
    { name: "title 6", children: [{ name: "title 7" }, { name: "title 8" }] },
  ],
};

const TreeDiagram = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const width = 928;

    // // Compute the tree height; this approach will allow the height of the
    // // SVG to scale according to the breadth (width) of the tree layout.
    const root = d3.hierarchy<TreeEntry>(data);
    const dx = 10;
    const dy = width / (root.height + 1);

    // Create a tree layout.
    const tree = d3.tree<TreeEntry>().nodeSize([dx, dy]);

    // Sort the tree and apply the layout.
    root.sort((a, b) => d3.ascending(a.data.name, b.data.name));
    tree(root);

    // Compute the extent of the tree. Note that x and y are swapped here
    // because in the tree layout, x is the breadth, but when displayed, the
    // tree extends right rather than down.
    let x0 = Infinity;
    let x1 = -x0;
    root.each((d) => {
      if (d.x! > x1) x1 = d.x!;
      if (d.x! < x0) x0 = d.x!;
    });

    // Compute the adjusted height of the tree.
    const height = x1 - x0 + dx * 2;

    const svg = d3
      .select(svgRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [-dy / 3, x0 - dx, width, height])
      .attr("style", "max-width: 100%; height: auto; font: 10px sans-serif;");

    const link = svg
      .append("g")
      .attr("fill", "none")
      .attr("stroke", "#555")
      .attr("stroke-opacity", 0.4)
      .attr("stroke-width", 1.5)
      .selectAll()
      .data(root.links())
      .join("path")
      .attr("d", (d) => {
        const linkGenerator = d3
          .linkHorizontal<d3.HierarchyPointLink<TreeEntry>, [number, number]>()
          .source((d) => [d.source.y, d.source.x])
          .target((d) => [d.target.y, d.target.x]);
        return linkGenerator(d as d3.HierarchyPointLink<TreeEntry>);
      });

    const node = svg
      .append("g")
      .attr("stroke-linejoin", "round")
      .attr("stroke-width", 3)
      .selectAll()
      .data(tree(root).descendants())
      .join("g")
      .attr("transform", (d) => `translate(${d.y},${d.x})`);

    node
      .append("circle")
      .attr("fill", (d) => (d.children ? "#555" : "#999"))
      .attr("r", 2.5);

    node
      .append("text")
      .attr("dy", "0.31em")
      .attr("x", (d) => (d.children ? -6 : 6))
      .attr("text-anchor", (d) => (d.children ? "end" : "start"))
      .text((d) => d.data.name)
      .clone(true)
      .lower()
      .attr("stroke", "white");
  }, []);

  return <svg ref={svgRef} width={1000} height={1000}></svg>;
};

export default TreeDiagram;
