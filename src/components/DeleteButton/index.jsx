const DeleteButton = ({handleDelete, id}) => {
   
    return (

        <button className="bg-red-600 text-white rounded-sm" onClick={() => handleDelete(id)}>Delete</button>

    )
}

export default DeleteButton