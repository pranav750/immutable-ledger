import React, { useState } from "react";
import { myBlockchain } from "../../blockchain";
import Blocks from "../Blocks/BlocksBasic";
import AddBlock from "../AddBlock/AddBasicBlock";
import HackBlock from "../HackBlock/HackBasicBlock";
import FixBlock from "../FixBlock/FixBasicBlock";
import Info from "../Info/InfoBasic";

const Home = () => {

    const [data, setData] = useState("");
    const [index, setIndex] = useState(0);
    const [hackedData, setHackedData] = useState("");
    const [fixedData, setFixedData] = useState("");
    const [isChainValid, setIsChainValid] = useState(myBlockchain.isChainValid());
    const [brokenIndex, setBrokenIndex] = useState(myBlockchain.brokenIndex());
    const [toggle, setToggle] = useState({
        add: false,
        hack: false,
        view: false,
        fix: false
    });

    const dataChangeHandler = (event) => {
        setData(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        myBlockchain.addBlock(data);
    }

    const indexChangeHandler = (event) => {
        setIndex(event.target.value);
    }

    const hackedDataChangeHandler = (event) => {
        setHackedData(event.target.value);
    }

    const fixedDataChangeHandler = (event) => {
        setFixedData(event.target.value);
    }

    const fixedSubmitHandler = (event) => {
        event.preventDefault();
        myBlockchain.editBlock(brokenIndex, fixedData);
        setIsChainValid(myBlockchain.isChainValid());
        setBrokenIndex(myBlockchain.brokenIndex());
    }

    const blockSubmitHandler = (event) => {
        event.preventDefault();
        if (index <= myBlockchain.chain.length - 1) { 
            myBlockchain.editBlock(index, hackedData);
        }
        setIsChainValid(myBlockchain.isChainValid());
        setBrokenIndex(myBlockchain.brokenIndex());
    }

    const hackDataToggler = (event) => {
        event.preventDefault();
        setToggle({
            add: false,
            hack: true,
            view: false,
            fix: false
        });
    }

    const addDataToggler = (event) => {
        event.preventDefault();
        setToggle({
            add: true,
            hack: false,
            view: false,
            fix: false
        });
    }

    const clearToggler = (event) => {
        event.preventDefault();
        setToggle({
            add: false,
            hack: false,
            view: false,
            fix: false
        });
    }

    const fixDataToggler = (event) => {
        event.preventDefault();
        setToggle({
            add: false,
            hack: false,
            view: false,
            fix: true
        });
    }

    const viewBlockChainToggler = (event) => {
        event.preventDefault();
        setToggle({
            add: false,
            hack: false,
            view: true,
            fix: false
        });
    }

    return (
        <div>
            <Info 
                addDataToggler={addDataToggler} 
                hackDataToggler={hackDataToggler}
                fixDataToggler={fixDataToggler} 
                clearToggler={clearToggler}
                viewBlockChainToggler={viewBlockChainToggler}
            />
            {toggle.add && (
                <AddBlock 
                    dataChangeHandler={dataChangeHandler} 
                    submitHandler={submitHandler}
                    isChainValid={isChainValid}
                />
            )}
            {toggle.hack && (
                <HackBlock 
                    hackedDataChangeHandler={hackedDataChangeHandler} 
                    indexChangeHandler={indexChangeHandler} 
                    blockSubmitHandler={blockSubmitHandler}
                    index={index}
                    isChainValid={isChainValid} 
                    length={myBlockchain.chain.length}
                />
            )}
            {toggle.fix && (
                <FixBlock 
                    fixedDataChangeHandler={fixedDataChangeHandler} 
                    fixedSubmitHandler={fixedSubmitHandler}
                    isChainValid={isChainValid}
                />
            )}

            {toggle.view && (
                <Blocks chain={myBlockchain.chain} isChainValid={isChainValid} brokenIndex={brokenIndex}/>
            )}

        </div>
    );
}

export default Home;