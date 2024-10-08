import ClassRoom from './0-classroom';

/**
 * Creates an array of {@link classRoom}s
 * @returns an array of {@link ClassRoom}s
 */

export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
