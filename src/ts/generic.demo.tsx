// use generic to List Item

// #1
interface TableProps<TItem> {
  items: TItem[];
  renderItem: (item: TItem) => React.ReactNode;
}

export function Table<TItem>(props: TableProps<TItem>) {
  return null;
}

const Component = () => {
  return (
    <Table<{ id: string; age: number }>
      items={[{ id: "1", age: 1 }]}
      renderItem={(item) => <div>{item.id}</div>}
    />
  );
};

// #2
type PropFrom<TComponent> = TComponent extends React.FC<infer Props>
  ? Props
  : TComponent extends React.Component<infer Props>
  ? Props
  : never;
