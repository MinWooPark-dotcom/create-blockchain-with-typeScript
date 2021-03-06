import * as CryptoJS from "crypto-js";
import { timeStamp } from "node:console";

class Block {
  // public index: number;
  // public hash: string;
  // public previousHash: string;
  // public timestamp: number;
  // public data: string;

  static calculateBlockHash = (
    index: number,
    previousHash: string,
    timestamp: number,
    data: string
  ): string =>
    CryptoJS.SHA256(index + previousHash + data + timestamp).toString();

  static vaildateStructure = (aBlock: Block): boolean =>
    typeof aBlock.index === "number" &&
    typeof aBlock.hash === "string" &&
    typeof aBlock.previousHash === "string" &&
    typeof aBlock.timestamp === "number" &&
    typeof aBlock.data === "string";

  constructor(
    public index: number,
    public hash: string,
    public previousHash: string,
    public data: string,
    public timestamp: number
  ) {
    // (this.index = index),
    //   (this.hash = hash),
    //   (this.previousHash = previousHash),
    //   (this.data = data),
    //   (this.timestamp = timestamp);
  }
}

const genesisBlock: Block = new Block(0, "20202020", "", "hello", 123456);

let blockchain: Block[] = [genesisBlock];

const getBlockchain = (): Block[] => blockchain;

const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

const getNweTimestamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string): Block => {
  const previousBlock: Block = getLatestBlock();
  const newIndex: number = previousBlock.index + 1;
  const newTimestamp: number = getNweTimestamp();
  const newHash: string = Block.calculateBlockHash(
    newIndex,
    previousBlock.hash,
    newTimestamp,
    data
  );
  const newBlock: Block = new Block(
    newIndex,
    newHash,
    previousBlock.hash,
    data,
    newTimestamp
  );
  addBlock(newBlock);
  return newBlock;
};

const getHashForBlock = (aBlock: Block): string =>
  Block.calculateBlockHash(
    aBlock.index,
    aBlock.previousHash,
    aBlock.timestamp,
    aBlock.data
  );

const isBlockValid = (candidateBlock: Block, previousBlock: Block): boolean => {
  if (!Block.vaildateStructure(candidateBlock)) {
    return false;
  } else if (previousBlock.index + 1 !== candidateBlock.index) {
    return false;
  } else if (getHashForBlock(candidateBlock) !== candidateBlock.hash) {
    return false;
  } else {
    return true;
  }
};

const addBlock = (candidateBlcok: Block): void => {
  if (isBlockValid(candidateBlcok, getLatestBlock())) {
    blockchain.push(candidateBlcok);
  }
};

createNewBlock("second block");
createNewBlock("third block");
createNewBlock("fourth block");
console.log(blockchain);

// ??? ????????? ????????? ????????? ?????? ????????? ??? ????????? ????????? ?????? ??????
// 1??? ????????? "?????? ?????? ?????? 'name'???(???) ?????? ????????? ??? ????????????.ts(2451)" ????????? ?????? ??? ????????? ???, ?????? ???????????? ??????
export {};
