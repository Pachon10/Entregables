import { mapToCollection } from '../../common/mappers/collection.mapper';
import * as viewModel from './project.vm';
import { EmployeeSummary, Project } from './project.vm';

const mapEmployeeSummaryFromApiToVm = (
  employeeSummary: EmployeeSummary
): viewModel.EmployeeSummary => ({
  ...employeeSummary,
});

const mapEmployeeSummaryListFromApiToVm = (
  employeeSummary: EmployeeSummary[]
): viewModel.EmployeeSummary[] =>
  mapToCollection(employeeSummary, es => mapEmployeeSummaryFromApiToVm(es));

export const mapProjectFromApiToVm = (
  project: Project
): viewModel.Project => {
  return Boolean(project)
    ? {
        ...project,
        employees: mapEmployeeSummaryListFromApiToVm(project.employees),
      }
    : viewModel.createEmptyProject();
};
