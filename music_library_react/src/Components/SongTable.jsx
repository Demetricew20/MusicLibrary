import React, { Component } from 'react';
import './SongTable.css'
import ModalForm from './Modal.js';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit';
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
        <ModalForm buttonStyle='btn btn-secondary' action='Edit' title='Edit Song'
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

            const {SearchBar} = Search;


        
            return (
            <div className='container-fluid'>
                <div className='add__song__btn row justify-content-start'>
                    <ModalForm buttonStyle='btn btn-success' action='Add New Song' title='Add Song' content={<AddSong/>}  />
                </div>


                <div> 
                    <ToolkitProvider
                    keyField='title'
                    data={this.state.songs}
                    columns={this.state.columns}
                    search
                    >
                        {
                            props => (
                                <div className="music__table" >
                                    <SearchBar className='search__bar' placeholder='Search for' {...props.searchProps} />
                                    <hr/>
                                    <BootstrapTable
                                    bootstrap4
                                    striped
                                    bordered
                                    condensed
                                    hover
                                    classes = 'table-dark table-md table-responsive-sm'
                                    keyField='title'
                                    data = {this.state.songs}
                                    columns={this.state.columns}
                                    {...props.baseProps}
                                    >
                                    </BootstrapTable>

                                </div>
                            )
                        }

                    </ToolkitProvider>
            </div>



            </div>
        );}
}

export default SongTable;
