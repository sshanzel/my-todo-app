export const initTodo = (): Todo => ({
  _id: '',
  title: '',
  completed: false,
});

export interface Todo {
  _id: string;
  title: string;
  description?: string;
  due?: Date & string;
  completed: boolean;
}
