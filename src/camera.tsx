/*
Задание:
1. Напишите интерфейс для функции и интерфейс для CameraGroup. 
2. Что из себя представляет структура данных CameraGroup? 
3. Напишите реализацию интерфейса CameraGroup
*/

// CameraGroup - это объект который имеет поля: id - number , camera_groups - CameraGroup[]

interface CameraGroup {
  id: number;
  camera_groups: CameraGroup[];
}

export const cameraGroupsReducer = (acc: number[], group: CameraGroup): number[] => {
  acc.push(group.id);
  if (group.camera_groups.length) {
    group.camera_groups.reduce(cameraGroupsReducer, acc);
  }
  return acc;
};
