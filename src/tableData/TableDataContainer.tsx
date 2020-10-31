import React, {useEffect, useState} from "react";
import YearSelector from "./YearSelector";
import TableData from "./TableData";
import logo from "../viking_duke.svg";
import {fetchData} from "../utils/fetch";

interface Conference {
    name: string;
    id: string;
    slug: string;
}

const TableDataContainer = () => {
    const [conferences, setConferences] = useState<Conference[]>([]);
    const [sessions, setSessions] = useState([]);
    const [conferenceId, setConferenceId] = useState("3baa25d3-9cca-459a-90d7-9fc349209289");
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        getTableData(conferenceId);
    }, [conferenceId]);


    useEffect(() => {
     getServerData();
    },[]);

    const getServerData = () => {
        fetchData<{conferences: Conference[]}>("https://sleepingpill.javazone.no/public/allSessions")
            .then(json => setConferences(json.conferences.sort(sortConferanceYearDesc)))
    };

    const getTableData = (value: string) =>  {
        setIsFetching(true);
        const init = {
            method: "GET",
            headers: new Headers({
                Authorization: "Basic " + btoa(`user:password`),
                "Content-Type": "application/x-www-form-urlencoded"
            })
        };
        fetchData<any>(`/data/conference/${value}/session`, init)
            .then(json => {
                setSessions(json.sessions)
            })
            .finally(() => {
                setIsFetching(false);
            });
    };

    return (
        <div className="col-md-10 mx-auto">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Cakelight</h2>
            <YearSelector
                conferences={conferences}
                changeSession={(event:any) => setConferenceId(event.target.value)}
            />
            {isFetching && <h1>Laster...</h1>}
            {!isFetching && <TableData sessionList={sessions} />}
        </div>
    );
};

function sortConferanceYearDesc(a: any, b: any) {
    if (a.slug > b.slug) return -1;
    if (a.slug < b.slug) return 1;
    return 0;
}

export default TableDataContainer;
