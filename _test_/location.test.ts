import { getDistanceBetweenLocationPair } from '../src/utils/locationHelper';

const location1 = {
  latitude: 51.56458184338445,
  longitude: -0.10857681077552694,
};
const location2 = {
  latitude: 51.5687394958671,
  longitude: -0.05431309211538789,
};

describe('getDistanceBetweenLocationPair', () => {
  it('should return a number', () => {
    const distance = getDistanceBetweenLocationPair(location1, location2);

    expect(typeof distance).toBe('number');
  });

  it('should return the distance between two locations', () => {
    const distance = getDistanceBetweenLocationPair(location1, location2);

    expect(distance).toBeCloseTo(3.77, 1);
  });
});
