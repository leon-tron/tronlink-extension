export const CONFIRMATION_TYPE = {
    SEND_TRON: 'SEND_TRON',
    CREATE_SMARTCONTRACT: 'CREATE_SMARTCONTRACT',
    TRIGGER_SMARTCONTRACT: 'TRIGGER_SMARTCONTRACT'
};

export const CONFIRMATION_RESULT = {
    ACCEPTED: 'ACCEPTED',
    DECLINED: 'DECLINED'
};

export const WALLET_STATUS = {
    UNINITIALIZED: 'UNINITIALIZED',
    LOCKED: 'LOCKED',
    UNLOCKED: 'UNLOCKED'
};

export const ACCOUNT_TYPE = {
    RAW: 0,
    MNEMONIC: 1
};

export const IMPORT_TYPE = {
    PRIVATE_KEY: 0,
    TRON_WATCH: 1,
    TRON_SCAN: 2,
    MNEMONIC: 3
}

export const BIP44 = {
    INDEX: 195,
    HEXA: 0x800000c3
};

export const ENCRYPTION_ALGORITHM = 'aes-256-ctr';
export const LOCALSTORAGE_NAMESPACE = 'TronLink';
export const LOCALSTORAGE_KEY = `${ LOCALSTORAGE_NAMESPACE }_WALLET`;

export const CURRENCY = {
    USD: 'USD'
};

export const TRON_CONSTANTS_BASE = {
    ADDRESS_SIZE: 42,
    TRANSACTION_MAX_BYTE_SIZE: 500 * 1024,
    MAXIMUM_TIME_UNTIL_EXPIRATION: 24 * 60 * 60 * 1000,
    TRANSACTION_DEFAULT_EXPIRATION_TIME: 60 * 1000
};

export const TRON_CONSTANTS_MAINNET = {
    ADD_PRE_FIX_BYTE: 0x41,
    ADD_PRE_FIX_STRING: '41',
};

export const TRON_CONSTANTS_TESTNET = {
    ADD_PRE_FIX_BYTE: 0xa0,
    ADD_PRE_FIX_STRING: 'a0',
};
