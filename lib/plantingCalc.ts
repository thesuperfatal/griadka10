export interface PlantingResult {
  plantsInRow: number;
  rows: number;
  total: number;
  areaM2: number;
  densityPerM2: number;
}

/**
 * Сколько растений на грядке при заданной схеме (см).
 * По краям оставляем половину шага — типичная схема «от края».
 */
export function calcPlanting(
  lengthM: number,
  widthM: number,
  cmInRow: number,
  cmBetweenRows: number,
): PlantingResult | null {
  if (
    !Number.isFinite(lengthM) ||
    !Number.isFinite(widthM) ||
    lengthM <= 0 ||
    widthM <= 0 ||
    cmInRow <= 0 ||
    cmBetweenRows <= 0
  ) {
    return null;
  }

  const lengthCm = lengthM * 100;
  const widthCm = widthM * 100;

  const plantsInRow = Math.max(1, Math.floor(lengthCm / cmInRow));
  const rows = Math.max(1, Math.floor(widthCm / cmBetweenRows));
  const total = plantsInRow * rows;
  const areaM2 = lengthM * widthM;
  const densityPerM2 = total / areaM2;

  return { plantsInRow, rows, total, areaM2, densityPerM2 };
}
