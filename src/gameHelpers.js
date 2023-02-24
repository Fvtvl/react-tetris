export const STAGE_WIDTH = 12;

export const STAGE_HIGHT = 20;

export const createStage = () =>
  Array.from(Array(STAGE_HIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, 'clear'])
  );
