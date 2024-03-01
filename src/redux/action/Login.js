export const mapStateToProps = (state) => {
    return {
        dataUser: state.userState.user
    }
}
export const mapDispatchToProps = (dispatch) => {
    return{
        deleteUser: (deleteUser) => dispatch({type: 'DELETE__USER', payload: deleteUser}),
        addUser: (addUser) => dispatch({type: 'ADD__USER', payload: addUser})
    }
}
