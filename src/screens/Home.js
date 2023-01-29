import React, { useState } from 'react'
import { useMutation, useQuery, useApolloClient } from '@apollo/client';
import { Button } from 'react-native';
import styled from 'styled-components/native';
import { GET_ALL_USERS } from '../graphQLAPI/user';

const Container = styled.View`
 align-items: center;
 `;
 const StyledText = styled.Text`
  font-size: 30px;
  margin-bottom: 10px;
`;

const Home = () => {
 return (
    <Container>
        <StyledText>Home</StyledText>
        <Button title="go to the list screen" />
    </Container>
 );
};


export default function Home(props) {
    const [users, setUsers] = useState([]);
    const client = useApolloClient();
    const { loading, error, data } = useQuery(GET_ALL_USERS);
    const [deleteUser, { data: deletedUser, loading: deleteLoading, error: deleteError}] = useMutation(DELETE_USER_BY_ID);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#E8F3F3' }}>
            <FlatList
            data={data?.getAllUsers || []}
            renderItem={_renderItem}
            keyExtractor={(item, index) => index.toString()}
            refreshing={true}
            />
        </SafeAreaView>
    );
};