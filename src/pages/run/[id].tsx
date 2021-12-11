/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useRouter } from 'next/router'
import { string } from 'prop-types'
import styles from '../../styles/Mouli.module.scss'
import { useEffect } from 'react'
import { test } from '../.././styles/data'

type HeaderType = {
    title: string;
    modulecode: string;
}

type TestType = {
    name: string;
    status: string;
    duration: Float32Array;
}

type SuitesObjectType = {
    name: string;
    tests: Array<TestType>;
    suites: Array<SuitesObjectType>;
}

type GridManagerType = {
    data: Array<SuitesObjectType>;
}

type ResultsType = {
    title: string;
    score: number;
    data: Array<TestType>;
    key: number;
}

const Header = ({title, modulecode}: HeaderType) => {
    return (
        <header>
            <h1>{title}</h1>
            <span>{modulecode}</span>
        </header>
    )
}

const ResultsItem = ({name, status}: {name: string, status: string}) => 
{   
    return (
        <div className={styles.results_item}>
            <h3>{name}</h3>
            <span>{status}</span>
        </div>
    )
}

const SuitesItem = ({title}: {title: string}) =>
{
    return (
        <div className={styles.results_suite}>
            <h3>Clients preliminaries</h3>
            <span>{title}%</span>
        </div>
    )
}

const Results = ({title, score, data}: ResultsType) => {
    return (
        <div className={styles.item_results}>
            <div className={styles.title}>
                <h3>{title}</h3>
                <h2>100</h2>
            </div>
            {data.map((item, index) => {
                return <ResultsItem key={index} name={item.name} status={item.status} />
            })}
        </div>
    )
}

const Suites = ({title, score}: ResultsType) => {
    return (
        <div className={styles.container_suites}>
            <div className={styles.title}>
                <h3>{title}</h3>
                <h2>100</h2>
            </div>
            <SuitesItem title='100'/>
            <SuitesItem title='66'/>
        </div>
    )
}

const getTests = (data: SuitesObjectType, name: string) => {
    console.log(name);
    return data.map((item, index: number) => {
        while (item.suites.length !== 0)
            return getTests(item.suites, item.name);
        return <Results key={index} title={name !== null ? `${name} / ${item.name}` : `${item.name}`} data={item.tests} score={3}></Results>
    })
}

const GridManager = ({data}: GridManagerType) => {
    // if (!data) {
    //     return <h3>Loading...</h3>
    // }
    return (
        <div className={styles.container_percentages}>
            <section>
                <Suites title="Suites" score={3} />
                <div className={styles.container_results}>
                    {getTests(data, null)}
                </div>
            </section>
        </div>
    )
}

const Run = () => {
    const router = useRouter();
    // useEffect(() => {
    //     if (!router.isReady) return;
    //     const { id } = router.query;
    //     console.log(id);
    //     fetch(`https://api.minimouli.com/run/${id}`)
    //     .then((res) => {
    //         console.log(res.json());
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })
    // }, [router.isReady])
    return (
        <div className={styles.container}>
            <Header title={test.data.project.name} modulecode={test.data.project.module}/>
            <GridManager data={test.data.suites}/>
            {/* <p>Post: {id}</p> */}
        </div>
    )
}

export default Run;
