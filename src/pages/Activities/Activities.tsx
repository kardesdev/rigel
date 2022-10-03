import { Component, For, createSignal } from 'solid-js';
import { Flex, Button } from '@hope-ui/solid';
import { Title } from '@app/components';
import { Plus } from '@app/icons';
import { Activity } from '@app/types';
import Area from './Area';
import NewActivityModal from './NewActivityModal';

import { useAppData } from '@app/context';
import { booleanSignal } from '@app/hooks';

const Activities: Component = () => {
  const [activity, setActivity] = createSignal<Activity | null>(null);
  const modal = booleanSignal();
  const { appState } = useAppData();

  const closeModal = () => {
    modal.disable();
    setActivity(null);
  };

  const onEditActivity = (activity: Activity) => {
    setActivity(activity);
    modal.enable();
  };

  return (
    <>
      <NewActivityModal isOpen={modal.active()} onClose={closeModal} activity={activity()} />
      <Flex justifyContent="space-between" flexWrap="wrap">
        <Title text="Actividades" />
        <Button colorScheme="success" leftIcon={<Plus />} size="sm" onClick={modal.enable} textTransform="uppercase">
          Nueva Actividad
        </Button>
      </Flex>
      <For each={appState.areas}>{(area) => (
        <Area area={area} onEditActivity={onEditActivity} />
      )}</For>
    </>
  );
};

export default Activities;
