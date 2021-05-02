import sha256 from "crypto-js/sha256";

class Block {
    constructor(index, data, prevHash = "") {
        this.index = index;
        this.data = data;
        this.timestamp = this.getCurrentTime();
        this.prevHash = prevHash;
        this.hash = this.calculateHash();
    }

    calculateHash() {
        return sha256(this.index + this.timestamp + this.prevHash + this.data).toString();
    }

    getCurrentTime() {
        const currentTimestamp = new Date();
        const time = currentTimestamp.getHours() + ":" + currentTimestamp.getMinutes() + " " + currentTimestamp.getDay() + 
                    "/" + currentTimestamp.getMonth() + "/" + currentTimestamp.getFullYear();
        return time;
    }
}

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock() {
        return new Block(0, "Genesis Block");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    getBlockData(index) {
        return this.chain[index].data;
    }

    addBlock(data) {
        if (this.isChainValid()) {
            const lastBlock = this.getLatestBlock();
            const newBlock = new Block(this.chain.length, data, lastBlock.hash);
            this.chain.push(newBlock);
            return "Block Added";
        } else {
            return "Blockchain not Valid";
        }
        
    }

    isChainValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i-1];

            if (currentBlock.hash !== currentBlock.calculateHash())
                return false;

            if (currentBlock.prevHash !== previousBlock.hash)
                return false;
        }
        return true;
    }

    editBlock(index, data) {
        const currentBlock = this.chain[index];
        currentBlock.data = data;
        currentBlock.hash = currentBlock.calculateHash();
    }

    brokenIndex() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i-1];

            if (currentBlock.prevHash !== previousBlock.hash)
                return i-1;
        }
        return -1;
    }
}

const myBlockchain = new Blockchain();

const firstBlockchain = new Blockchain();
const secondBlockchain = new Blockchain();
const thirdBlockchain = new Blockchain();

export { myBlockchain, firstBlockchain, secondBlockchain, thirdBlockchain };