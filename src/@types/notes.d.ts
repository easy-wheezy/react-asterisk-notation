export interface INote {
    key: string;
    description: string;
  }
  export type NoteContextType = {
    notes: INote[];
    saveTodo: (note: INote) => void;
  };