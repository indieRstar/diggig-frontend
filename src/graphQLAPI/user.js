import { gql } from '@apollo/client'

const GET_ALL_USERS = gql`
query getAllUsers {
    getAllUsers {
     id
     email
     name
    }
}
`;

const GET_SINGLE_USERS = gql`
query getSingleUser {
    getSingleUser {
        id
        email
        name
    }
}
`

