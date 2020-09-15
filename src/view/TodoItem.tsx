import React from 'react';
import DeleteTodoIcon from '../components/Icons/DeleteTodoIcon';
import SaveTodoIcon from '../components/Icons/SaveTodoIcon';
import TSButton from '../components/TSButton';
import TSDatePicker from '../components/TSDatePicker';
import TSInput from '../components/TSInput';
import TSTextarea from '../components/TSTextarea';
import {Todo} from '../store/reducers/types';

export interface TodoItemProps {
  todo?: Todo;
  onSave?: () => void;
  onDelete?: () => void;
  onChange?: (value: string | Date, field: keyof Todo) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({todo, onSave, onDelete, onChange}) => {
  return (
    <div className='p-4 flex flex-1 flex-col'>
      <label className='flex justify-center text-2xl font-semibold text-gray-700'>Todo</label>
      <TSInput
        label='Title:'
        shadow
        filled
        className='mt-4'
        value={todo && todo.title}
        onChange={e => onChange && onChange(e.target.value, 'title')}
      />
      <TSTextarea
        label='Description:'
        shadow
        filled
        className='mt-4'
        value={todo && todo.description}
        onChange={e => onChange && onChange(e.target.value, 'description')}
      />
      <TSDatePicker
        label='Due Date:'
        shadow
        filled
        className='mt-4'
        value={todo && todo.due}
        onChange={e => onChange && onChange(e.target.value, 'due')}
      />
      <div className='flex flex-row mt-4'>
        <TSButton buttonType='SECONDARY' onClick={onSave} className='w-20 mr-4'>
          <SaveTodoIcon /> Save
        </TSButton>
        <TSButton buttonType='TERTIARY' onClick={onDelete} className='mr-4'>
          <DeleteTodoIcon /> Delete
        </TSButton>
        <TSButton buttonType='SECONDARY' className='w-20 mr-4'>
          <SaveTodoIcon /> Tag #1
        </TSButton>
        <TSButton buttonType='TERTIARY'>
          <DeleteTodoIcon /> Tag #2
        </TSButton>
      </div>
    </div>
  );
};

export default TodoItem;
