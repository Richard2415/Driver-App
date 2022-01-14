import gql from "graphql-tag";

export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!) {
    addProfile(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        name
        email
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
        email
      }
    }
  }
`;

export const SAVE_INFO = gql`
  mutation saveInfo($dataDriver: DriverInput!) {
    saveInfo(dataDriver: $dataDriver) {
      firstName
      lastName
      companyName
      phoneNumber
      driverLicence
    }
  }
`;

export const SAVE_TRUCK = gql`
  mutation saveTruck($rego: String!, $model: String!, $year: String!) {
    saveTruck(rego: $rego, model: $model, year: $year) {
      _id
      rego
      model
      year
      truckDriver
    }
  }
`;

export const DELETE_TRUCK = gql`
  mutation deleteTruck($truckId: ID!) {
    deleteTruck(truckId: $truckId) {
        _id
        rego
        model
        year
          }
  }
`;

export const SAVE_RUNSHEET = gql`
  mutation saveRunsheet($dataRunsheet: RunsheetInput!) {
    saveRunsheet(dataRunsheet: $dataRunsheet) {
      savedRunsheets {
        _id
        date
        startTime
        finishTime
        startOdometer
        finishOdometer
      }
    }
  }
`;

export const REMOVE_RUNSHEET = gql`
  mutation removeRunsheet($runsheetId: ID!) {
    removeRunsheet(runsheetId: $runsheetId) {
        _id
        date
        startTime
        finishTime
        startOdometer
        finishOdometer
    }
  }
`;