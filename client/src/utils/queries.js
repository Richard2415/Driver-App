import gql from "graphql-tag";

export const QUERY_ME = gql`
  {
    me {
      _id
      name
      email
      driver {
        firstName
        lastName
        companyName
        phoneNumber
        driverLicence
      }
      trucks {
        _id
        rego
        model
        year
        truckDriver
      }
      savedRunsheets {
        date
        startTime
        finishTime
        startOdometer
        finishOdometer
      }
    }
  }
`;

export const QUERY_TRUCKS = gql`
  {
    trucks {
      _id
      rego
      model
      year
      truckDriver
    }
  }
`;

