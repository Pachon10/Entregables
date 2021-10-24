import { mapProjectFromApiToVm } from "./project.mapper";
import * as apiModel from './api/project.api-model';
import { createEmptyProject, Project } from "./project.vm";

describe('./pods/project/project.mapper.spect', () => {
  it('should return empty array when feeding undefined project', () => {
    // Arrange
    const project = undefined;

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(createEmptyProject());
  });

  it('should return empty array when feeding null project', () => {
    // Arrange
    const project = null;

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(createEmptyProject());
  });

  it('should return one item with values when passing one employees', () => {
    // Arrange
    const project: apiModel.Project =
      {
        id: "1",
        isActive: true,
        name: "name1",
        comments: "Coment",
        externalId: "ExternalId1",
        employees: [{
          employeeName: "Name1",
          id: "1",
          isAssigned: false
        }]
      };

    const expectedResult: Project =
      {
        id: "1",
        isActive: true,
        name: "name1",
        comments: "Coment",
        externalId: "ExternalId1",
        employees: [{
          employeeName: "Name1",
          id: "1",
          isAssigned: false
        }]
      }

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('should return one item with values when passing undifined employees', () => {
    // Arrange
    const project: apiModel.Project =
      {
        id: "1",
        isActive: true,
        name: "name1",
        comments: "Coment",
        externalId: "ExternalId1",
        employees: undefined
      };

    const expectedResult: Project =
      {
        id: "1",
        isActive: true,
        name: "name1",
        comments: "Coment",
        externalId: "ExternalId1",
        employees: []
      }

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('should return one item with values when passing null employees', () => {
    // Arrange
    const project: apiModel.Project =
      {
        id: "1",
        isActive: true,
        name: "name1",
        comments: "Coment",
        externalId: "ExternalId1",
        employees: null
      };

    const expectedResult: Project =
      {
        id: "1",
        isActive: true,
        name: "name1",
        comments: "Coment",
        externalId: "ExternalId1",
        employees: []
      }

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('should return one item with values when passing [] employees', () => {
    // Arrange
    const project: apiModel.Project =
      {
        id: "1",
        isActive: true,
        name: "name1",
        comments: "Coment",
        externalId: "ExternalId1",
        employees: []
      };

    const expectedResult: Project =
      {
        id: "1",
        isActive: true,
        name: "name1",
        comments: "Coment",
        externalId: "ExternalId1",
        employees: []
      }

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('should return one item with values when passing two employees', () => {
    // Arrange
    const project: apiModel.Project =
      {
        id: "1",
        isActive: true,
        name: "name1",
        comments: "Coment",
        externalId: "ExternalId1",
        employees: [
          {
          employeeName: "Name1",
          id: "1",
          isAssigned: false
          },
          {
            employeeName: "Name2",
            id: "2",
            isAssigned: true
          }
      ]
      };

    const expectedResult: Project =
      {
        id: "1",
        isActive: true,
        name: "name1",
        comments: "Coment",
        externalId: "ExternalId1",
        employees: [
          {
            employeeName: "Name1",
            id: "1",
            isAssigned: false
          },
          {
              employeeName: "Name2",
              id: "2",
              isAssigned: true
          }
        ]
      }

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(expectedResult);
  });
});
