type FooProps = {
  message: string;
};

function Foo({ message }: FooProps) {
  return <div>Say: {message}</div>;
}

export default Foo;
