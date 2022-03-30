export interface INote {
    key: string;
    description: string;
  }
  export type NoteContextType = {
    notes: INote[];
    saveNote: (note: INote) => void;
  };