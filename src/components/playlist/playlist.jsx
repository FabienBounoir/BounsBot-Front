// import React from "react";
import "./_playlist.css";
import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { Spinner } from 'react-bootstrap/'
import { Form, Card, ListGroup, ListGroupItem } from 'react-bootstrap/'

class Playlist extends Component {
    state = {
        playlistList: [],
        page: 0,
        hasMoreData: true,
        recherche: false,
        load: true
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        //production
        let url = "https://backendbounsbot.herokuapp.com/playlist/"

        //dev
        // let url = `http://localhost:3001/playlist/`

        fetch(url + `?page=${this.state.page}`)
        .then(response => response.json())
        .then((result) => {
            // console.log(result)
            this.setState({
            playlistList: this.state.playlistList.concat(result.playlist),
            page: this.state.page + 1,
            hasMoreData: result.playlist.length !== 0,
            recherche: false,
            load: false
            });
        })
        .catch(console.log)
    };

    _handleKeyDown = (e) => {
        console.log(e.key)
        console.log(document.getElementById('PLaylistSearch').value.length)

        if(document.getElementById('PLaylistSearch').value.length !== 0 || e.key === "Enter")
        {
            let url = "https://backendbounsbot.herokuapp.com/playlist/search/"
            
            // let url = `http://localhost:3001/playlist/search/`

            let message = document.getElementById('PLaylistSearch').value;

            fetch(url + message)
                .then(response => response.json())
                .then((result) => {
                this.setState({
                    playlistList: result.playlist,
                    recherche: true
                });
                })
                .catch(console.log)
        }
        else if(e.key === "Backspace" && document.getElementById('PLaylistSearch').value.length === 0)
        {
            let url = "https://backendbounsbot.herokuapp.com/playlist/"
            
            // let url = `http://localhost:3001/playlist/`

            fetch(url).then(response => response.json())
            .then((result) => {
                this.setState({
                    playlistList: result.playlist,
                    recherche: true
                });
            })
            .catch(console.log)
        }
    }

    render() {
        return (
        <div className="leaderboardglobal">
            <div className="top"><h1 id="titre" >PLAYLIST</h1><div className="search search-bar" data-v-7085cbe2=""><Form.Control type="text" id="PLaylistSearch" onKeyDown={this._handleKeyDown}  placeholder="Recherche Playlist" /></div></div>

            <div >
                {(() => {
                    var playlistElement = [];
                    
                    if(this.state.playlistList.length !== 0)
                    {
                        for (let i = 0; i < this.state.playlistList.length; i++) {

                            playlistElement.push(
                                <div className="cardCenter">
                                    <Card key={ i } className="cardTemplate" style={{ width: '18rem', backgroundColor: "#181818", color:'white', margin: "10px" }}>
                                    <a href={"/playlist/" + this.state.playlistList[i].nom} style={{"textDecoration": "none" }}>
                                    <Card.Img width="254px" height="254px" variant="top" src={this.state.playlistList[i].picture} />
                                    <Card.Body>
                                        <Card.Title style={{ color: '#0cab34', fontSize: '150%' }}>{ this.state.playlistList[i].nom[0].toUpperCase() }{ this.state.playlistList[i].nom.slice(1) }</Card.Title>
                                    </Card.Body>
                                    <ListGroup style={{"borderRadius": "5px" }}>
                                    <ListGroupItem style={{backgroundColor: "#0cab34" }} >{ this.state.playlistList[i].ownerName }</ListGroupItem>
                                    <ListGroupItem style={{backgroundColor: "#0cab34" }} >{ this.state.playlistList[i].musique.length } musiques</ListGroupItem>
                                    </ListGroup>
                                    </a>
                                    </Card>
                                </div>
                            );
                        }
                        return <InfiniteScroll dataLength={this.state.playlistList.length} next={this.getData} hasMore={this.state.hasMoreData} loader={<div><Spinner animation="grow" variant="success" /><Spinner animation="grow" variant="success" /><Spinner animation="grow" variant="success" /></div>}><div className="renderPLaylist">{playlistElement}</div></InfiniteScroll>;
                    }
                    else if(this.state.load)
                    {
                        return <div><Spinner animation="grow" variant="success" /><Spinner animation="grow" variant="success" /><Spinner animation="grow" variant="success" /></div>
                    }
                    else
                    {
                        return <h1 style={{paddingTop:"50px"}}>Cette playlist est introuvable</h1>
                    }
                })()}
            </div>
        </div>
        )
    }
    }

export default Playlist;

