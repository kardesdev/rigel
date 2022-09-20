import { createDexieArrayQuery } from 'solid-dexie';
import { useAppData } from '@app/context';
import { db } from '@app/db/dexie';

/** returns the students list of current class use it only when appState.selectedClass is defined */
const studentsStore = () => {
  const { appState } = useAppData();
  return createDexieArrayQuery(
    () => db.students.where('class_id').equals(appState.selectedClass!.id).sortBy('last_name'),
  );
};

export default studentsStore;
