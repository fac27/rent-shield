import {getPropertyById, getAllProperties, getAllPropertyStatuses, getAllPropertyTypes} from '../src/lib/models';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

describe('Model function tests', () => {
    describe('getPropertyById', () => {
        it('should return a property type object', async () => {
            const property = await getPropertyById(1);
            expect(property).toBeDefined();
            expect(property[0].id).toEqual(1);
        });
    });

    describe('getAllProperties', () => {
        it('should return an array of properties', async () => {
            const properties = await getAllProperties();
            expect(properties).toBeDefined();
            expect(properties.length).toBeGreaterThan(0);
        });
    });

    describe('getAllPropertyTypes', () => {
        it('should return an array of property types', async () => {
            const propertyTypes = await getAllPropertyTypes();
            expect(propertyTypes).toBeDefined();
            expect(propertyTypes.length).toBeGreaterThan(0);
        });
    });

    describe('getAllPropertyStatuses', () => {
        it('should return an array of property statuses', async () => {
            const propertyStatuses = await getAllPropertyStatuses();
            expect(propertyStatuses).toBeDefined();
            expect(propertyStatuses.length).toBeGreaterThan(0);
        });
    })
})