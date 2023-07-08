import axios from 'axios'

const baseUrl = 'https://gateway.scan-interfax.ru'

function login(name, password) {
  return axios.post(`${baseUrl}/api/v1/account/login`, {
    login: name,
    password,
  })
}

function getLimits() {
  return axios.get(`${baseUrl}/api/v1/account/info`, {})
}

function histograms(
  intervalType,
  histogramTypes,
  issueDateInterval,
  searchContext,
  similarMode,
  limit,
  sortType,
  sortDirectionType,
  attributeFilters
) {
  return axios.post(`${baseUrl}/api/v1/objectsearch/histograms`, {
    issueDateInterval: {
      startDate: '2019-01-01T00:00:00+03:00',
      endDate: '2022-08-31T23:59:59+03:00',
    },
    searchContext: {
      targetSearchEntitiesContext: {
        targetSearchEntities: [
          {
            type: 'company',
            sparkId: null,
            entityId: null,
            inn: 7710137066,
            maxFullness: true,
            inBusinessNews: null,
          },
        ],
        onlyMainRole: true,
        tonality: 'any',
        onlyWithRiskFactors: false,
        riskFactors: {
          and: [],
          or: [],
          not: [],
        },
        themes: {
          and: [],
          or: [],
          not: [],
        },
      },
      themesFilter: {
        and: [],
        or: [],
        not: [],
      },
    },
    searchArea: {
      includedSources: [],
      excludedSources: [],
      includedSourceGroups: [],
      excludedSourceGroups: [],
    },
    attributeFilters: {
      excludeTechNews: true,
      excludeAnnouncements: true,
      excludeDigests: true,
    },
    similarMode: 'duplicates',
    limit: 1000,
    sortType: 'sourceInfluence',
    sortDirectionType: 'desc',
    intervalType: 'month',
    histogramTypes: ['totalDocuments', 'riskFactors'],
  })
}

export { login, getLimits }
