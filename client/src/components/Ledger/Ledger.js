import React, { useState } from "react";
import { myBlockchain, firstBlockchain, secondBlockchain, thirdBlockchain } from "../../blockchain";
import Blocks from "../Blocks/Blocks";
import AddBlock from "../AddBlock/AddBlock";
import HackBlock from "../HackBlock/HackBlock";
import FixBlock from "../FixBlock/FixBlock";
import Info from "../Info/Info";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";

const Ledger = ({ distributed }) => {

    const classes = useStyles();

    const [data, setData] = useState("");
    const [index, setIndex] = useState(0);
    const [hackedData, setHackedData] = useState("");
    const [fixedData, setFixedData] = useState("");
    const [blockNumber, setBlockNumber] = useState("");
    const [isChainValid, setIsChainValid] = useState({
        first: firstBlockchain.isChainValid(),
        second: secondBlockchain.isChainValid(),
        third: thirdBlockchain.isChainValid(),
        myChain: myBlockchain.isChainValid()
    });
    const [brokenIndex, setBrokenIndex] = useState({
        first: firstBlockchain.brokenIndex(),
        second: secondBlockchain.brokenIndex(),
        third: thirdBlockchain.brokenIndex(),
        myChain: myBlockchain.brokenIndex()
    });
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
        if (distributed) {
            firstBlockchain.addBlock(data);
            secondBlockchain.addBlock(data);
            thirdBlockchain.addBlock(data);
        } else {
            myBlockchain.addBlock(data);
        }
    }

    const indexChangeHandler = (event) => {
        setIndex(event.target.value);
    }

    const blockNumberHandler = (event) => {
        setBlockNumber(event.target.value);
    }

    const hackedDataChangeHandler = (event) => {
        setHackedData(event.target.value);
    }

    const fixedDataChangeHandler = (event) => {
        setFixedData(event.target.value);
    }

    const fixedSubmitHandler = (event) => {
        event.preventDefault();
        if (distributed) {
            if (!isChainValid.first) {
                firstBlockchain.editBlock(brokenIndex.first, secondBlockchain.getBlockData(brokenIndex.first));
            } else if (!isChainValid.second) {
                secondBlockchain.editBlock(brokenIndex.second, thirdBlockchain.getBlockData(brokenIndex.second));  
            } else if (!isChainValid.third) {
                thirdBlockchain.editBlock(brokenIndex.third, firstBlockchain.getBlockData(brokenIndex.third));
            }
        } else {
            myBlockchain.editBlock(brokenIndex.myChain, fixedData);
        }

        setIsChainValid({
            first: firstBlockchain.isChainValid(),
            second: secondBlockchain.isChainValid(),
            third: thirdBlockchain.isChainValid(),
            myChain: myBlockchain.isChainValid()
        });
        setBrokenIndex({
            first: firstBlockchain.brokenIndex(),
            second: secondBlockchain.brokenIndex(),
            third: thirdBlockchain.brokenIndex(),
            myChain: myBlockchain.brokenIndex()
        });
        setBlockNumber("");
    }

    const blockSubmitHandler = (event) => {
        event.preventDefault();
        if (distributed) {
            if (blockNumber === "1") {
                if (index <= firstBlockchain.chain.length - 1) {
                    firstBlockchain.editBlock(index, hackedData);
                    
                    setIsChainValid(prevState => ({
                        ...prevState,
                        first: firstBlockchain.isChainValid()
                    }));
                    setBrokenIndex(prevState => ({
                        ...prevState,
                        first: firstBlockchain.brokenIndex()
                    }));
                }
            } else if (blockNumber === "2") {
                if (index <= secondBlockchain.chain.length - 1) {
                    secondBlockchain.editBlock(index, hackedData);
                    
                    setIsChainValid(prevState => ({
                        ...prevState,
                        second: secondBlockchain.isChainValid()
                    }));
                    setBrokenIndex(prevState => ({
                        ...prevState,
                        second: secondBlockchain.brokenIndex()
                    }));
                }   
            } else if (blockNumber === "3") {
                if (index <= thirdBlockchain.chain.length - 1) {
                    thirdBlockchain.editBlock(index, hackedData);
                    
                    setIsChainValid(prevState => ({
                        ...prevState,
                        third: thirdBlockchain.isChainValid()
                    }));
                    setBrokenIndex(prevState => ({
                        ...prevState,
                        third: thirdBlockchain.brokenIndex()
                    }));
                }
            }
        } else {
            if (index <= myBlockchain.chain.length - 1) { 
                myBlockchain.editBlock(index, hackedData);
            
                setIsChainValid(prevState => ({
                    ...prevState,
                    myChain: myBlockchain.isChainValid()
                }));
                setBrokenIndex(prevState => ({
                    ...prevState,
                    myChain: myBlockchain.brokenIndex()
                }));
            }
        }
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
                distributed={distributed}
            />

            {toggle.add && (
                <AddBlock 
                    dataChangeHandler={dataChangeHandler} 
                    submitHandler={submitHandler}
                    isChainValid={distributed ? (isChainValid.first && isChainValid.second && isChainValid.third) : isChainValid.myChain}
                />
            )}

            {toggle.hack && (
                <HackBlock 
                    hackedDataChangeHandler={hackedDataChangeHandler} 
                    indexChangeHandler={indexChangeHandler} 
                    blockSubmitHandler={blockSubmitHandler}
                    blockNumberHandler={blockNumberHandler}
                    blockNumber={blockNumber}
                    index={index}
                    isChainValid={distributed ? (isChainValid.first && isChainValid.second && isChainValid.third) : isChainValid.myChain} 
                    length={distributed ? firstBlockchain.chain.length : myBlockchain.chain.length}
                    distributed={distributed}
                />
            )}

            {toggle.fix && (
                <FixBlock 
                    fixedDataChangeHandler={fixedDataChangeHandler} 
                    fixedSubmitHandler={fixedSubmitHandler}
                    distributed={distributed}
                    isChainValid={distributed ? (isChainValid.first && isChainValid.second && isChainValid.third) : isChainValid.myChain}
                />
            )}

            {(toggle.view && !distributed) && (
                <Blocks chain={myBlockchain.chain} isChainValid={isChainValid.myChain} blockchainName="" brokenIndex={brokenIndex.myChain} distributed={distributed}/>
            )}

            {(toggle.view && distributed) && (
                <Grid className={classes.container}>  
                    <Blocks className={classes.containerItem} chain={firstBlockchain.chain} blockchainName="1" isChainValid={isChainValid.first} brokenIndex={brokenIndex.first} distributed={distributed}/>
                    <Blocks className={classes.containerItem} chain={secondBlockchain.chain} blockchainName="2" isChainValid={isChainValid.second} brokenIndex={brokenIndex.second} distributed={distributed}/>
                    <Blocks className={classes.containerItem} chain={thirdBlockchain.chain} blockchainName="3" isChainValid={isChainValid.third} brokenIndex={brokenIndex.third} distributed={distributed}/>  
                </Grid>
            )}

        </div>
    );
}

export default Ledger;