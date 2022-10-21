import type { Component } from 'solid-js';

import {
  Flex,
  Button,
  IconButton,
  Box,
  Table,
  Text,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@hope-ui/solid';
import { Show, For } from 'solid-js';
import { Title } from '@app/components';
import { Link } from '@solidjs/router';
import { Plus, Pencil, Trash } from '@app/icons';

import { useAppData } from '@app/context';
import { studentsStore } from '@app/hooks';

const Students: Component = () => {
  const { appState } = useAppData();

  const students = studentsStore();

  return (
    <>
      <Flex justifyContent="space-between" flexWrap="wrap">
        <Title text="Estudiantes" />
        <Button
          size="sm"
          as={Link}
          href={`/class/${appState.selectedClass!.id}/students/new`}
          colorScheme="success"
          leftIcon={<Plus w="$5" h="$5" />}
        >
          REGISTRAR ESTUDIANTE
        </Button>
      </Flex>
      <Show
        when={students.length > 0}
        fallback={
          <Text color="$neutral11" fontStyle="italic" textAlign="center" my="$6">
            No existen estudiantes registrados aun.
          </Text>
        }
      >
        <Box overflowX="auto" maxW="$full" mt="$4">
          <Table striped="even" dense>
            <Thead>
              <Tr>
                <Th>Apellido(s):</Th>
                <Th>Nombre(s):</Th>
                <Th>Cédula de Identidad:</Th>
                <Th numeric>Acciones</Th>
              </Tr>
            </Thead>
            <Tbody>
              <For each={students}>
                {(student) => (
                  <Tr>
                    <Td>{student.last_name}</Td>
                    <Td>{student.name}</Td>
                    <Td>{student.ci === '' ? '-' : student.ci}</Td>
                    <Td numeric>
                      <IconButton
                        as={Link}
                        href={`/class/${appState.selectedClass!.id}/student/${student.id}/edit`}
                        size="xs"
                        colorScheme="info"
                        aria-label="Editar"
                        icon={<Pencil width="$4" height="$4" />}
                        mr="$2"
                      />
                      <IconButton size="xs" colorScheme="danger" aria-label="Eliminar" icon={<Trash width="$4" height="$4" />} />
                    </Td>
                  </Tr>
                )}
              </For>
            </Tbody>
          </Table>
        </Box>
      </Show>
    </>
  );
};

export default Students;
