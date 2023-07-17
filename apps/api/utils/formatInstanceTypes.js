const classifyInstanceTypes = (servers) => {
  const groups = {
    'Learning - STARDUST1': [],
    'Cost-Optimized - PLAY2/PRO2': [],
    'Cost-Optimized - DEV1/GP1': [],
    'Production-Optimized - ENT1': [],
    'Workload-Optimized - POP2HC': [],
    'Workload-Optimized - POP2HM': [],
    'Production-Optimized - POP2': [],
    'GPU Instances': []
  }

  Object.keys(servers).forEach((server) => {
    const instance = servers[server]
    const type = server.slice(0, 4)
    switch (type) {
      case 'STAR':
        groups['Learning - STARDUST1'].push(instance)
        break
      case 'PLAY':
      case 'PRO2':
        groups['Cost-Optimized - PLAY2/PRO2'].push(instance)
        break
      case 'DEV1':
      case 'GP1 ':
        groups['Cost-Optimized - DEV1/GP1'].push(instance)
        break
      case 'ENT1':
        groups['Production-Optimized - ENT1'].push(instance)
        break
      case 'POP2':
        if (server.includes('HC')) {
          groups['Workload-Optimized - POP2HC'].push(instance)
        } else if (server.includes('HM')) {
          groups['Workload-Optimized - POP2HM'].push(instance)
        } else {
          groups['Production-Optimized - POP2'].push(instance)
        }
        break
      default:
        if (instance.gpu > 0) {
          groups['GPU Instances'].push(instance)
        }
        break
    }
  })

  return groups
}

const formatInstanceTypes = (servers) => {
  const groups = classifyInstanceTypes(servers)

  const formatResponse = Object.keys(groups).reduce((result, group) => {
    if (groups[group].length > 0) {
      result.push({
        group,
        instances: groups[group].map((instance, index) => ({
          type: Object.keys(servers).find((key) => servers[key] === instance),
          monthlyPrice: instance.monthly_price,
          hourlyPrice: instance.hourly_price,
          ncpus: instance.ncpus,
          ram: instance.ram / 1024 / 1024 / 1024,
          volumes_constraint: {
            minSize: instance.volumes_constraint.min_size,
            maxSize: instance.volumes_constraint.max_size / 1024 / 1024 / 1024
          },
          defaultBootType: instance.capabilities.default_boot_type,
          blockStorage: instance.capabilities.block_storage,
          bandwidth: instance.network
            ? `${
                (instance.network.sum_internal_bandwidth ||
                  instance.network.sum_internet_bandwidth) / 1000000
              } Mbps`
            : 'Not specified'
        }))
      })
    }
    return result
  }, [])

  return formatResponse
}

module.exports = { formatInstanceTypes }
