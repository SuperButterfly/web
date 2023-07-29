import { configureStore } from '@reduxjs/toolkit'
import projectreducer from './slices/projectSlices'
import workspacereducer from './slices/workspaceSlices'
import userreducer from './slices/usersSlices'
import breakpointsreducer from './slices/breakpointsSlices'
import componentreducer from './slices/componentSlices'
import datatablereducer from './slices/datatableSlices'
import resourcesreducer from './slices/resourcesSlices'
import instancesreducer from './slices/instancesSlices'
import domainsreducer from './slices/domainsSlices'
import pressetsreducer from './slices/pressetsSlice'
import screenshotReducer from './slices/screenshotSlices'
// resourcesSlices

export const store = configureStore({
  reducer: {
    component: componentreducer,
    datatable: datatablereducer,
    project: projectreducer,
    workspace: workspacereducer,
    breakpoints: breakpointsreducer,
    user: userreducer,
    resources: resourcesreducer,
    instances: instancesreducer,
    domains: domainsreducer,
    screenshot: screenshotReducer,
    pressets: pressetsreducer
  }
})
