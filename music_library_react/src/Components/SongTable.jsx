import React, { Component } from 'react';
import ModalForm from './Modal.js';
import BootstrapTable from 'react-bootstrap-table-next';
import MusicLibraryServices from '../Services/requests.js';
import EditSong from './EditSong.jsx';
import DeleteSong from './DeleteSong.js';
import AddSong from './AddSong.jsx';

export class SongTable extends Component {

    state = {
        songs: [],
        columns: [{
            dataField: 'title',
            text: 'Song Title'
        },
        {  dataField: 'artist',
            text: 'Artist'
        },
        {
            dataField: 'album',
            text: 'Album'
        },
        {
            dataField: 'genre',
            text: 'Genre'
        },
        {
            dataField: 'release_date',
            text: 'Release Date'
        },
        {
            dataField: 'edit',
            text: 'Edit',
            formatter: this.columnEditButton
        },
        {
            dataField: 'delete',
            text: 'Delete',
            formatter: this.columnDeleteButton,
        }

    
    
        ]
    };



    columnEditButton(cell, row, rowIndex, formatExtraData){
        return (
        <ModalForm action='Edit' title='Edit Song'
        content={<EditSong id={row.id}/>}/>
        )
    }
    
    columnDeleteButton(cell, row, rowIndex, formatExtraData){
        return (
                <DeleteSong id={row.id} />

            
        )
    }

    async deleteSong(id){
        await MusicLibraryServices.delete(id)
        .then(response => {
          console.log(response.data);
          this.props.history.push('/')
        })
        .catch(error => {
          console.log(error.response);
        })
    }
    



    componentDidMount(){
        this.getAllSongs()
    }

    async getAllSongs(){
        const response = await MusicLibraryServices.getAll();
        this.setState({
          songs: response.data
        })
      };



    render(){   
            return (
            <div>
                <div>
                {}
                <BootstrapTable
                striped
                hover
                keyField='title'
                data = {this.state.songs}
                columns={this.state.columns}>
                

                </BootstrapTable>
                



                </div>

                <div>
                    <ModalForm action='Add New Song' title='Add Song' content={<AddSong/>}  />
                </div>





            </div>
        );}
}

export default SongTable;







            {/* <table className="table table-dark table-sm table-striped">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Genre</th>
                        <th>Release Date</th>
                    </tr>
                </thead>
                {props.mapSongs()}
            </table>
            <div>
            <ModalForm action='Add New Song' title='Add Song' content={<AddSong/>}/>
                
            </div> */}
