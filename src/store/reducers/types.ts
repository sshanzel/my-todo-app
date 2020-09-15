export const initTodo = (): Todo => ({
  _id: '',
  title: '',
});

export interface Todo {
  _id: string;
  title: string;
  description?: string;
  due?: Date & string;
}
