import React, { useState } from "react";
import { firstBlockchain, secondBlockchain, thirdBlockchain } from "../../blockchain";
import Blocks from "../Blocks/BlocksDistributed";
import AddBlock from "../AddBlock/AddDistributedBlock";
import HackBlock from "../HackBlock/HackDistributedBlock";
import FixBlock from "../FixBlock/FixDistributedBlock";
import Info from "../Info/InfoDistributed";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";

const DistributedP2P = () => {

    const classes = useStyles();

    const [data, setData] = useState("");
    const [index, setIndex] = useState(0);
    const [hackedData, setHackedData] = useState("");
    const [blockNumber, setBlockNumber] = useState("");
    const [isChainValid, setIsChainValid] = useState({
        first: firstBlockchain.isChainValid(),
        second: secondBlockchain.isChainValid(),
        third: thirdBlockchain.isChainValid()
    });
    const [brokenIndex, setBrokenIndex] = useState({
        first: firstBlockchain.brokenIndex(),
        second: secondBlockchain.brokenIndex(),
        third: thirdBlockchain.brokenIndex()
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
        firstBlockchain.addBlock(data);
        secondBlockchain.addBlock(data);
        thirdBlockchain.addBlock(data);
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

    const blockSubmitHandler = (event) => {
        event.preventDefault();
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
        
    }

    const fixedSubmitHandler = (event) => {
        event.preventDefault();
        if (!isChainValid.first) {
            firstBlockchain.editBlock(brokenIndex.first, secondBlockchain.getBlockData(brokenIndex.first));
        } else if (!isChainValid.second) {
            secondBlockchain.editBlock(brokenIndex.second, thirdBlockchain.getBlockData(brokenIndex.second));  
        } else if (!isChainValid.third) {
            thirdBlockchain.editBlock(brokenIndex.third, firstBlockchain.getBlockData(brokenIndex.third));
        }
        
        setIsChainValid({
            first: firstBlockchain.isChainValid(),
            second: secondBlockchain.isChainValid(),
            third: thirdBlockchain.isChainValid()
        });
        setBrokenIndex({
            first: firstBlockchain.brokenIndex(),
            second: secondBlockchain.brokenIndex(),
            third: thirdBlockchain.brokenIndex()
        });
        setBlockNumber("");
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
                    isChainValid={isChainValid.first && isChainValid.second && isChainValid.third}
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
                    isChainValid={isChainValid.first && isChainValid.second && isChainValid.third} 
                    length={firstBlockchain.chain.length}
                />
            )}
            {toggle.fix && (
                <FixBlock 
                    fixedSubmitHandler={fixedSubmitHandler}
                    isChainValid={isChainValid.first && isChainValid.second && isChainValid.third}
                />
            )}

            <Grid className={classes.container}>
                {toggle.view && (
                    <>
                    <Blocks className={classes.containerItem} chain={firstBlockchain.chain} blockchainName="1" isChainValid={isChainValid.first} brokenIndex={brokenIndex.first}/>
                    <Blocks className={classes.containerItem} chain={secondBlockchain.chain} blockchainName="2" isChainValid={isChainValid.second} brokenIndex={brokenIndex.second}/>
                    <Blocks className={classes.containerItem} chain={thirdBlockchain.chain} blockchainName="3" isChainValid={isChainValid.third} brokenIndex={brokenIndex.third}/>
                    </>
                )}
            </Grid>

            

        </div>
    );
}

export default DistributedP2P;