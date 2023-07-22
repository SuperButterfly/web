import { configureStore } from '@reduxjs/toolkit'
import projectreducer from './slices/projectSlices.js'
import workspacereducer from './slices/workspaceSlices.js'
import userreducer from './slices/usersSlices.js'
import breakpointsreducer from './slices/breakpointsSlices.js'
import componentreducer from './slices/componentSlices.js'
import datatablereducer from './slices/datatableSlices.js'
import resourcesreducer from './slices/resourcesSlices.js'
import instancesreducer from './slices/instancesSlices'
import domainsreducer from './slices/domainsSlices'
import pressetsreducer from './slices/pressetsSlice.js'
import screenshotReducer from './slices/screenshotSlices.js'
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
