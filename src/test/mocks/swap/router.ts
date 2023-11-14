import { BatchPairsInfo } from '~/types/contracts/swap/model';
import { TokensConfig } from '~/types/shared';

const batchPairsInfoMock: BatchPairsInfo = [
  {
    pairContractAddress: 'CONTRACT_ADDRESS_PAIR_1',
    pairInfo: {
      lpTokenAmount: '0',
      lpTokenContract: {
        address: 'MOCK_LP_TOKEN_CONTRACT_ADDRESS_PAIR_1',
        codeHash: 'MOCK_LP_TOKEN_CODE_HASH_PAIR_1',
      },
      token0Contract: {
        address: 'TOKEN_A_CONTRACT_ADDRESS',
        codeHash: 'TOKEN_A_CODE_HASH',
      },
      token1Contract: {
        address: 'TOKEN_B_CONTRACT_ADDRESS',
        codeHash: 'TOKEN_B_CODE_HASH',
      },
      factoryContract: null,
      daoContractAddress: 'MOCK_DAO_CONTRACT_ADDRESS_PAIR_1',
      isStable: false,
      token0Amount: '111111111000000',
      token1Amount: '222222222000000',
      pairSettings: {
        lpFee: 0.02,
        daoFee: 0.01,
        stableParams: null,
      },
      contractVersion: 1,
    },
  },
  {
    pairContractAddress: 'CONTRACT_ADDRESS_PAIR_2',
    pairInfo: {
      lpTokenAmount: '0',
      lpTokenContract: {
        address: 'MOCK_LP_TOKEN_CONTRACT_ADDRESS_PAIR_2',
        codeHash: 'MOCK_LP_TOKEN_CODE_HASH_PAIR_2',
      },
      token0Contract: {
        address: 'TOKEN_C_CONTRACT_ADDRESS',
        codeHash: 'TOKEN_C_CODE_HASH',
      },
      token1Contract: {
        address: 'TOKEN_B_CONTRACT_ADDRESS',
        codeHash: 'TOKEN_B_CODE_HASH',
      },
      factoryContract: null,
      daoContractAddress: 'MOCK_DAO_CONTRACT_ADDRESS_PAIR_2',
      isStable: false,
      token0Amount: '333333333000000',
      token1Amount: '4444444444000000',
      pairSettings: {
        lpFee: 0.01,
        daoFee: 0.01,
        stableParams: null,
      },
      contractVersion: 1,
    },
  },
  {
    pairContractAddress: 'CONTRACT_ADDRESS_PAIR_3',
    pairInfo: {
      lpTokenAmount: '0',
      lpTokenContract: {
        address: 'MOCK_LP_TOKEN_CONTRACT_ADDRESS_PAIR_3',
        codeHash: 'MOCK_LP_TOKEN_CODE_HASH_PAIR_3',
      },
      token0Contract: {
        address: 'TOKEN_C_CONTRACT_ADDRESS',
        codeHash: 'TOKEN_C_CODE_HASH',
      },
      token1Contract: {
        address: 'TOKEN_D_CONTRACT_ADDRESS',
        codeHash: 'TOKEN_D_CODE_HASH',
      },
      factoryContract: null,
      daoContractAddress: 'MOCK_DAO_CONTRACT_ADDRESS_PAIR_3',
      isStable: false,
      token0Amount: '5555555555000000',
      token1Amount: '66666666000000',
      pairSettings: {
        lpFee: 0.02,
        daoFee: 0.02,
        stableParams: null,
      },
      contractVersion: 1,
    },
  },
  {
    pairContractAddress: 'CONTRACT_ADDRESS_PAIR_4',
    pairInfo: {
      lpTokenAmount: '0',
      lpTokenContract: {
        address: 'MOCK_LP_TOKEN_CONTRACT_ADDRESS_PAIR_4',
        codeHash: 'MOCK_LP_TOKEN_CODE_HASH_PAIR_4',
      },
      token0Contract: {
        address: 'TOKEN_E_CONTRACT_ADDRESS',
        codeHash: 'TOKEN_E_CODE_HASH',
      },
      token1Contract: {
        address: 'TOKEN_F_CONTRACT_ADDRESS',
        codeHash: 'TOKEN_F_CODE_HASH',
      },
      factoryContract: null,
      daoContractAddress: 'MOCK_DAO_CONTRACT_ADDRESS_PAIR_4',
      isStable: true,
      token0Amount: '157485051',
      token1Amount: '135613721',
      pairSettings: {
        lpFee: 0.01,
        daoFee: 0.02,
        stableParams: {
          priceRatio: '1.1234567',
          alpha: '200',
          gamma1: '6',
          gamma2: '50',
          oracle: {
            address: 'ORACLE_CONTRACT_ADDRESS_PAIR_4',
            codeHash: 'ORACLE_CODE_HASH_PAIR_4',
          },
          token0Data: {
            oracleKey: 'ORACLE_KEY',
            decimals: 5,
          },
          token1Data: {
            oracleKey: 'ORACLE_KEY',
            decimals: 5,
          },
          minTradeSizeXForY: '1e-9',
          minTradeSizeYForX: '1e-9',
          maxPriceImpactAllowed: '500',
          customIterationControls: null,
        },
      },
      contractVersion: 1,
    },
  },
  {
    pairContractAddress: 'CONTRACT_ADDRESS_PAIR_5',
    pairInfo: {
      lpTokenAmount: '0',
      lpTokenContract: {
        address: 'MOCK_LP_TOKEN_CONTRACT_ADDRESS_PAIR_5',
        codeHash: 'MOCK_LP_TOKEN_CODE_HASH_PAIR_5',
      },
      token0Contract: {
        address: 'TOKEN_G_CONTRACT_ADDRESS',
        codeHash: 'TOKEN_G_CODE_HASH',
      },
      token1Contract: {
        address: 'TOKEN_F_CONTRACT_ADDRESS',
        codeHash: 'TOKEN_F_CODE_HASH',
      },
      factoryContract: null,
      daoContractAddress: 'MOCK_DAO_CONTRACT_ADDRESS_PAIR_5',
      isStable: true,
      token0Amount: '157485051',
      token1Amount: '135613721',
      pairSettings: {
        lpFee: 0.04,
        daoFee: 0.16,
        stableParams: {
          priceRatio: '1.1234567',
          alpha: '200',
          gamma1: '6',
          gamma2: '50',
          oracle: {
            address: 'ORACLE_CONTRACT_ADDRESS_PAIR_5',
            codeHash: 'ORACLE_CODE_HASH_PAIR_5',
          },
          token0Data: {
            oracleKey: 'ORACLE_KEY',
            decimals: 5,
          },
          token1Data: {
            oracleKey: 'ORACLE_KEY',
            decimals: 5,
          },
          minTradeSizeXForY: '1e-9',
          minTradeSizeYForX: '1e-9',
          maxPriceImpactAllowed: '500',
          customIterationControls: null,
        },
      },
      contractVersion: 1,
    },
  },
  {
    pairContractAddress: 'CONTRACT_ADDRESS_PAIR_6',
    pairInfo: {
      lpTokenAmount: '145080056',
      lpTokenContract: {
        address: 'MOCK_LP_TOKEN_CONTRACT_ADDRESS_PAIR_6',
        codeHash: 'MOCK_LP_TOKEN_CODE_HASH_PAIR_6',
      },
      token0Contract: {
        address: 'TOKEN_G_CONTRACT_ADDRESS',
        codeHash: 'TOKEN_G_CODE_HASH',
      },
      token1Contract: {
        address: 'TOKEN_H_CONTRACT_ADDRESS',
        codeHash: 'TOKEN_H_CODE_HASH',
      },
      factoryContract: null,
      daoContractAddress: 'MOCK_DAO_CONTRACT_ADDRESS_PAIR_6',
      isStable: true,
      token0Amount: '157485051',
      token1Amount: '135613721',
      pairSettings: {
        lpFee: 0.04,
        daoFee: 0.16,
        stableParams: {
          priceRatio: '1.1234567',
          alpha: '200',
          gamma1: '6',
          gamma2: '50',
          oracle: {
            address: 'ORACLE_CONTRACT_ADDRESS_PAIR_6',
            codeHash: 'ORACLE_CODE_HASH_PAIR_6',
          },
          token0Data: {
            oracleKey: 'ORACLE_KEY',
            decimals: 5,
          },
          token1Data: {
            oracleKey: 'ORACLE_KEY',
            decimals: 5,
          },
          minTradeSizeXForY: '1e-9',
          minTradeSizeYForX: '1e-9',
          maxPriceImpactAllowed: '500',
          customIterationControls: null,
        },
      },
      contractVersion: 1,
    },
  },
  {
    pairContractAddress: 'CONTRACT_ADDRESS_PAIR_7',
    pairInfo: {
      lpTokenAmount: '145080056',
      lpTokenContract: {
        address: 'MOCK_LP_TOKEN_CONTRACT_ADDRESS_PAIR_7',
        codeHash: 'MOCK_LP_TOKEN_CODE_HASH_PAIR_7',
      },
      token0Contract: {
        address: 'TOKEN_F_CONTRACT_ADDRESS',
        codeHash: 'TOKEN_F_CODE_HASH',
      },
      token1Contract: {
        address: 'TOKEN_I_CONTRACT_ADDRESS',
        codeHash: 'TOKEN_I_CODE_HASH',
      },
      factoryContract: null,
      daoContractAddress: 'MOCK_DAO_CONTRACT_ADDRESS_PAIR_7',
      isStable: false,
      token0Amount: '157485051',
      token1Amount: '135613721',
      pairSettings: {
        lpFee: 0.04,
        daoFee: 0.16,
        stableParams: null,
      },
      contractVersion: 1,
    },
  },
  {
    pairContractAddress: 'CONTRACT_ADDRESS_PAIR_8',
    pairInfo: {
      lpTokenAmount: '145080056',
      lpTokenContract: {
        address: 'MOCK_LP_TOKEN_CONTRACT_ADDRESS_PAIR_8',
        codeHash: 'MOCK_LP_TOKEN_CODE_HASH_PAIR_8',
      },
      token0Contract: {
        address: 'TOKEN_I_CONTRACT_ADDRESS',
        codeHash: 'TOKEN_I_CODE_HASH',
      },
      token1Contract: {
        address: 'TOKEN_H_CONTRACT_ADDRESS',
        codeHash: 'TOKEN_H_CODE_HASH',
      },
      factoryContract: null,
      daoContractAddress: 'MOCK_DAO_CONTRACT_ADDRESS_PAIR_8',
      isStable: false,
      token0Amount: '157485051',
      token1Amount: '135613721',
      pairSettings: {
        lpFee: 0.04,
        daoFee: 0.16,
        stableParams: null,
      },
      contractVersion: 1,
    },
  },
  {
    pairContractAddress: 'CONTRACT_ADDRESS_PAIR_9',
    pairInfo: {
      lpTokenAmount: '145080056',
      lpTokenContract: {
        address: 'MOCK_LP_TOKEN_CONTRACT_ADDRESS_PAIR_8',
        codeHash: 'MOCK_LP_TOKEN_CODE_HASH_PAIR_8',
      },
      token0Contract: {
        address: 'TOKEN_H_CONTRACT_ADDRESS',
        codeHash: 'TOKEN_H_CODE_HASH',
      },
      token1Contract: {
        address: 'TOKEN_J_CONTRACT_ADDRESS',
        codeHash: 'TOKEN_J_CODE_HASH',
      },
      factoryContract: null,
      daoContractAddress: 'MOCK_DAO_CONTRACT_ADDRESS_PAIR_8',
      isStable: false,
      token0Amount: '157485051',
      token1Amount: '135613721',
      pairSettings: {
        lpFee: 0.04,
        daoFee: 0.16,
        stableParams: null,
      },
      contractVersion: 1,
    },
  },
  {
    pairContractAddress: 'CONTRACT_ADDRESS_PAIR_10',
    pairInfo: {
      lpTokenAmount: '145080056',
      lpTokenContract: {
        address: 'MOCK_LP_TOKEN_CONTRACT_ADDRESS_PAIR_10',
        codeHash: 'MOCK_LP_TOKEN_CODE_HASH_PAIR_10',
      },
      token0Contract: {
        address: 'TOKEN_K_CONTRACT_ADDRESS',
        codeHash: 'TOKEN_K_CODE_HASH',
      },
      token1Contract: {
        address: 'TOKEN_L_CONTRACT_ADDRESS',
        codeHash: 'TOKEN_L_CODE_HASH',
      },
      factoryContract: null,
      daoContractAddress: 'MOCK_DAO_CONTRACT_ADDRESS_PAIR_10',
      isStable: true,
      token0Amount: '157485051000000',
      token1Amount: '135613721000000',
      pairSettings: {
        lpFee: 0.01,
        daoFee: 0.01,
        stableParams: {
          priceRatio: '3',
          alpha: '10',
          gamma1: '4',
          gamma2: '5',
          oracle: {
            address: 'ORACLE_CONTRACT_ADDRESS_PAIR_10',
            codeHash: 'ORACLE_CODE_HASH_PAIR_10',
          },
          token0Data: {
            oracleKey: 'ORACLE_KEY',
            decimals: 5,
          },
          token1Data: {
            oracleKey: 'ORACLE_KEY',
            decimals: 5,
          },
          minTradeSizeXForY: '1e-9',
          minTradeSizeYForX: '1e-9',
          maxPriceImpactAllowed: '500',
          customIterationControls: null,
        },
      },
      contractVersion: 1,
    },
  },
  {
    pairContractAddress: 'CONTRACT_ADDRESS_PAIR_11',
    pairInfo: {
      lpTokenAmount: '145080056',
      lpTokenContract: {
        address: 'MOCK_LP_TOKEN_CONTRACT_ADDRESS_PAIR_11',
        codeHash: 'MOCK_LP_TOKEN_CODE_HASH_PAIR_11',
      },
      token0Contract: {
        address: 'TOKEN_M_CONTRACT_ADDRESS',
        codeHash: 'TOKEN_M_CODE_HASH',
      },
      token1Contract: {
        address: 'TOKEN_L_CONTRACT_ADDRESS',
        codeHash: 'TOKEN_L_CODE_HASH',
      },
      factoryContract: null,
      daoContractAddress: 'MOCK_DAO_CONTRACT_ADDRESS_PAIR_11',
      isStable: true,
      token0Amount: '157485051000000',
      token1Amount: '135613721000000',
      pairSettings: {
        lpFee: 0.01,
        daoFee: 0.01,
        stableParams: {
          priceRatio: '3',
          alpha: '10',
          gamma1: '4',
          gamma2: '5',
          oracle: {
            address: 'ORACLE_CONTRACT_ADDRESS_PAIR_11',
            codeHash: 'ORACLE_CODE_HASH_PAIR_11',
          },
          token0Data: {
            oracleKey: 'ORACLE_KEY',
            decimals: 5,
          },
          token1Data: {
            oracleKey: 'ORACLE_KEY',
            decimals: 5,
          },
          minTradeSizeXForY: '1e-9',
          minTradeSizeYForX: '1e-9',
          maxPriceImpactAllowed: '500',
          customIterationControls: null,
        },
      },
      contractVersion: 1,
    },
  },
  {
    pairContractAddress: 'CONTRACT_ADDRESS_PAIR_12',
    pairInfo: {
      lpTokenAmount: '145080056',
      lpTokenContract: {
        address: 'MOCK_LP_TOKEN_CONTRACT_ADDRESS_PAIR_12',
        codeHash: 'MOCK_LP_TOKEN_CODE_HASH_PAIR_12',
      },
      token0Contract: {
        address: 'TOKEN_M_CONTRACT_ADDRESS',
        codeHash: 'TOKEN_M_CODE_HASH',
      },
      token1Contract: {
        address: 'TOKEN_N_CONTRACT_ADDRESS',
        codeHash: 'TOKEN_N_CODE_HASH',
      },
      factoryContract: null,
      daoContractAddress: 'MOCK_DAO_CONTRACT_ADDRESS_PAIR_12',
      isStable: true,
      token0Amount: '157485051000000',
      token1Amount: '135613721000000',
      pairSettings: {
        lpFee: 0.01,
        daoFee: 0.01,
        stableParams: {
          priceRatio: '3',
          alpha: '10',
          gamma1: '4',
          gamma2: '5',
          oracle: {
            address: 'ORACLE_CONTRACT_ADDRESS_PAIR_12',
            codeHash: 'ORACLE_CODE_HASH_PAIR_12',
          },
          token0Data: {
            oracleKey: 'ORACLE_KEY',
            decimals: 5,
          },
          token1Data: {
            oracleKey: 'ORACLE_KEY',
            decimals: 5,
          },
          minTradeSizeXForY: '1e-9',
          minTradeSizeYForX: '1e-9',
          maxPriceImpactAllowed: '500',
          customIterationControls: null,
        },
      },
      contractVersion: 1,
    },
  },
  {
    pairContractAddress: 'CONTRACT_ADDRESS_PAIR_13',
    pairInfo: {
      lpTokenAmount: '0',
      lpTokenContract: {
        address: 'MOCK_LP_TOKEN_CONTRACT_ADDRESS_PAIR_13',
        codeHash: 'MOCK_LP_TOKEN_CODE_HASH_PAIR_13',
      },
      token0Contract: {
        address: 'TOKEN_O_CONTRACT_ADDRESS',
        codeHash: 'TOKEN_O_CODE_HASH',
      },
      token1Contract: {
        address: 'TOKEN_L_CONTRACT_ADDRESS',
        codeHash: 'TOKEN_L_CODE_HASH',
      },
      factoryContract: null,
      daoContractAddress: 'MOCK_DAO_CONTRACT_ADDRESS_PAIR_13',
      isStable: false,
      token0Amount: '111111111000000',
      token1Amount: '222222222000000',
      pairSettings: {
        lpFee: 0.02,
        daoFee: 0.01,
        stableParams: {
          priceRatio: '3',
          alpha: '200',
          gamma1: '6',
          gamma2: '50',
          oracle: {
            address: 'ORACLE_CONTRACT_ADDRESS_PAIR_13',
            codeHash: 'ORACLE_CODE_HASH_PAIR_13',
          },
          token0Data: {
            oracleKey: 'ORACLE_KEY',
            decimals: 5,
          },
          token1Data: {
            oracleKey: 'ORACLE_KEY',
            decimals: 5,
          },
          minTradeSizeXForY: '1e-9',
          minTradeSizeYForX: '1e-9',
          maxPriceImpactAllowed: '500',
          customIterationControls: null,
        },
      },
      contractVersion: 1,
    },
  },
  {
    pairContractAddress: 'CONTRACT_ADDRESS_PAIR_14',
    pairInfo: {
      lpTokenAmount: '0',
      lpTokenContract: {
        address: 'MOCK_LP_TOKEN_CONTRACT_ADDRESS_PAIR_14',
        codeHash: 'MOCK_LP_TOKEN_CODE_HASH_PAIR_14',
      },
      token0Contract: {
        address: 'TOKEN_M_CONTRACT_ADDRESS',
        codeHash: 'TOKEN_M_CODE_HASH',
      },
      token1Contract: {
        address: 'TOKEN_P_CONTRACT_ADDRESS',
        codeHash: 'TOKEN_P_CODE_HASH',
      },
      factoryContract: null,
      daoContractAddress: 'MOCK_DAO_CONTRACT_ADDRESS_PAIR_14',
      isStable: false,
      token0Amount: '111111111000000',
      token1Amount: '222222222000000',
      pairSettings: {
        lpFee: 0.02,
        daoFee: 0.01,
        stableParams: null,
      },
      contractVersion: 1,
    },
  },
  {
    pairContractAddress: 'CONTRACT_ADDRESS_PAIR_15',
    pairInfo: {
      lpTokenAmount: '0',
      lpTokenContract: {
        address: 'MOCK_LP_TOKEN_CONTRACT_ADDRESS_PAIR_15',
        codeHash: 'MOCK_LP_TOKEN_CODE_HASH_PAIR_15',
      },
      token0Contract: {
        address: 'TOKEN_Q_CONTRACT_ADDRESS',
        codeHash: 'TOKEN_Q_CODE_HASH',
      },
      token1Contract: {
        address: 'TOKEN_R_CONTRACT_ADDRESS',
        codeHash: 'TOKEN_R_CODE_HASH',
      },
      factoryContract: null,
      daoContractAddress: 'MOCK_DAO_CONTRACT_ADDRESS_PAIR_15',
      isStable: true,
      token0Amount: '157485051000000',
      token1Amount: '135613721000000',
      pairSettings: {
        lpFee: 0.01,
        daoFee: 0.01,
        stableParams: {
          priceRatio: '3',
          alpha: '10',
          gamma1: '4',
          gamma2: '5',
          oracle: {
            address: 'ORACLE_CONTRACT_ADDRESS_PAIR_15',
            codeHash: 'ORACLE_CODE_HASH_PAIR_15',
          },
          token0Data: {
            oracleKey: 'ORACLE_KEY',
            decimals: 5,
          },
          token1Data: {
            oracleKey: 'ORACLE_KEY',
            decimals: 5,
          },
          minTradeSizeXForY: '1e-9',
          minTradeSizeYForX: '1e-9',
          maxPriceImpactAllowed: '500',
          customIterationControls: null,
        },
      },
      contractVersion: 1,
    },
  },
  {
    pairContractAddress: 'CONTRACT_ADDRESS_PAIR_16',
    pairInfo: {
      lpTokenAmount: '145080056',
      lpTokenContract: {
        address: 'MOCK_LP_TOKEN_CONTRACT_ADDRESS_PAIR_16',
        codeHash: 'MOCK_LP_TOKEN_CODE_HASH_PAIR_16',
      },
      token0Contract: {
        address: 'TOKEN_S_CONTRACT_ADDRESS',
        codeHash: 'TOKEN_S_CODE_HASH',
      },
      token1Contract: {
        address: 'TOKEN_R_CONTRACT_ADDRESS',
        codeHash: 'TOKEN_R_CODE_HASH',
      },
      factoryContract: null,
      daoContractAddress: 'MOCK_DAO_CONTRACT_ADDRESS_PAIR_16',
      isStable: true,
      token0Amount: '157485051000000',
      token1Amount: '135613721000000',
      pairSettings: {
        lpFee: 0.01,
        daoFee: 0.01,
        stableParams: {
          priceRatio: '3',
          alpha: '10',
          gamma1: '4',
          gamma2: '5',
          oracle: {
            address: 'ORACLE_CONTRACT_ADDRESS_PAIR_16',
            codeHash: 'ORACLE_CODE_HASH_PAIR_16',
          },
          token0Data: {
            oracleKey: 'ORACLE_KEY',
            decimals: 5,
          },
          token1Data: {
            oracleKey: 'ORACLE_KEY',
            decimals: 5,
          },
          minTradeSizeXForY: '1e-9',
          minTradeSizeYForX: '1e-9',
          maxPriceImpactAllowed: '500',
          customIterationControls: null,
        },
      },
      contractVersion: 1,
    },
  },
  {
    pairContractAddress: 'CONTRACT_ADDRESS_PAIR_17',
    pairInfo: {
      lpTokenAmount: '145080056',
      lpTokenContract: {
        address: 'MOCK_LP_TOKEN_CONTRACT_ADDRESS_PAIR_17',
        codeHash: 'MOCK_LP_TOKEN_CODE_HASH_PAIR_17',
      },
      token0Contract: {
        address: 'TOKEN_S_CONTRACT_ADDRESS',
        codeHash: 'TOKEN_S_CODE_HASH',
      },
      token1Contract: {
        address: 'TOKEN_T_CONTRACT_ADDRESS',
        codeHash: 'TOKEN_T_CODE_HASH',
      },
      factoryContract: null,
      daoContractAddress: 'MOCK_DAO_CONTRACT_ADDRESS_PAIR_17',
      isStable: true,
      token0Amount: '157485051000000',
      token1Amount: '135613721000000',
      pairSettings: {
        lpFee: 0.01,
        daoFee: 0.01,
        stableParams: {
          priceRatio: '3',
          alpha: '10',
          gamma1: '4',
          gamma2: '5',
          oracle: {
            address: 'ORACLE_CONTRACT_ADDRESS_PAIR_17',
            codeHash: 'ORACLE_CODE_HASH_PAIR_17',
          },
          token0Data: {
            oracleKey: 'ORACLE_KEY',
            decimals: 5,
          },
          token1Data: {
            oracleKey: 'ORACLE_KEY',
            decimals: 5,
          },
          minTradeSizeXForY: '1e-9',
          minTradeSizeYForX: '1e-9',
          maxPriceImpactAllowed: '500',
          customIterationControls: null,
        },
      },
      contractVersion: 1,
    },
  },
  {
    pairContractAddress: 'CONTRACT_ADDRESS_PAIR_18',
    pairInfo: {
      lpTokenAmount: '145080056',
      lpTokenContract: {
        address: 'MOCK_LP_TOKEN_CONTRACT_ADDRESS_PAIR_18',
        codeHash: 'MOCK_LP_TOKEN_CODE_HASH_PAIR_18',
      },
      token0Contract: {
        address: 'TOKEN_S_CONTRACT_ADDRESS',
        codeHash: 'TOKEN_S_CODE_HASH',
      },
      token1Contract: {
        address: 'TOKEN_Q_CONTRACT_ADDRESS',
        codeHash: 'TOKEN_Q_CODE_HASH',
      },
      factoryContract: null,
      daoContractAddress: 'MOCK_DAO_CONTRACT_ADDRESS_PAIR_18',
      isStable: true,
      token0Amount: '157485051000000',
      token1Amount: '135613721000000',
      pairSettings: {
        lpFee: 0.01,
        daoFee: 0.01,
        stableParams: {
          priceRatio: '3',
          alpha: '10',
          gamma1: '4',
          gamma2: '5',
          oracle: {
            address: 'ORACLE_CONTRACT_ADDRESS_PAIR_18',
            codeHash: 'ORACLE_CODE_HASH_PAIR_18',
          },
          token0Data: {
            oracleKey: 'ORACLE_KEY',
            decimals: 5,
          },
          token1Data: {
            oracleKey: 'ORACLE_KEY',
            decimals: 5,
          },
          minTradeSizeXForY: '1e-9',
          minTradeSizeYForX: '1e-9',
          maxPriceImpactAllowed: '500',
          customIterationControls: null,
        },
      },
      contractVersion: 1,
    },
  },
];

const batchPairsInfoMockForComplexRoute: BatchPairsInfo = [
  {
    pairContractAddress: 'CONTRACT_ADDRESS_PAIR_1',
    pairInfo: {
      lpTokenAmount: '0',
      lpTokenContract: {
        address: 'MOCK_LP_TOKEN_CONTRACT_ADDRESS_PAIR_1',
        codeHash: 'MOCK_LP_TOKEN_CODE_HASH_PAIR_1',
      },
      token0Contract: {
        address: 'TOKEN_A_CONTRACT_ADDRESS',
        codeHash: 'TOKEN_A_CODE_HASH',
      },
      token1Contract: {
        address: 'TOKEN_F_CONTRACT_ADDRESS',
        codeHash: 'TOKEN_F_CODE_HASH',
      },
      factoryContract: null,
      daoContractAddress: 'MOCK_DAO_CONTRACT_ADDRESS_PAIR_1',
      isStable: false,
      token0Amount: '111111111',
      token1Amount: '222222222',
      pairSettings: {
        lpFee: 0.01,
        daoFee: 0.02,
        stableParams: null,
      },
      contractVersion: 1,
    },
  },
  {
    pairContractAddress: 'CONTRACT_ADDRESS_PAIR_2',
    pairInfo: {
      lpTokenAmount: '0',
      lpTokenContract: {
        address: 'MOCK_LP_TOKEN_CONTRACT_ADDRESS_PAIR_2',
        codeHash: 'MOCK_LP_TOKEN_CODE_HASH_PAIR_2',
      },
      token0Contract: {
        address: 'TOKEN_F_CONTRACT_ADDRESS',
        codeHash: 'TOKEN_F_CODE_HASH',
      },
      token1Contract: {
        address: 'TOKEN_D_CONTRACT_ADDRESS',
        codeHash: 'TOKEN_D_CODE_HASH',
      },
      factoryContract: null,
      daoContractAddress: 'MOCK_DAO_CONTRACT_ADDRESS_PAIR_2',
      isStable: false,
      token0Amount: '333333333',
      token1Amount: '4444444444',
      pairSettings: {
        lpFee: 0.01,
        daoFee: 0.01,
        stableParams: null,
      },
      contractVersion: 1,
    },
  },
  {
    pairContractAddress: 'CONTRACT_ADDRESS_PAIR_3',
    pairInfo: {
      lpTokenAmount: '0',
      lpTokenContract: {
        address: 'MOCK_LP_TOKEN_CONTRACT_ADDRESS_PAIR_3',
        codeHash: 'MOCK_LP_TOKEN_CODE_HASH_PAIR_3',
      },
      token0Contract: {
        address: 'TOKEN_A_CONTRACT_ADDRESS',
        codeHash: 'TOKEN_A_CODE_HASH',
      },
      token1Contract: {
        address: 'TOKEN_D_CONTRACT_ADDRESS',
        codeHash: 'TOKEN_D_CODE_HASH',
      },
      factoryContract: null,
      daoContractAddress: 'MOCK_DAO_CONTRACT_ADDRESS_PAIR_3',
      isStable: false,
      token0Amount: '5555555555',
      token1Amount: '66666666',
      pairSettings: {
        lpFee: 0.02,
        daoFee: 0.02,
        stableParams: null,
      },
      contractVersion: 1,
    },
  },
  {
    pairContractAddress: 'CONTRACT_ADDRESS_PAIR_4',
    pairInfo: {
      lpTokenAmount: '0',
      lpTokenContract: {
        address: 'MOCK_LP_TOKEN_CONTRACT_ADDRESS_PAIR_4',
        codeHash: 'MOCK_LP_TOKEN_CODE_HASH_PAIR_4',
      },
      token0Contract: {
        address: 'TOKEN_D_CONTRACT_ADDRESS',
        codeHash: 'TOKEN_D_CODE_HASH',
      },
      token1Contract: {
        address: 'TOKEN_G_CONTRACT_ADDRESS',
        codeHash: 'TOKEN_G_CODE_HASH',
      },
      factoryContract: null,
      daoContractAddress: 'MOCK_DAO_CONTRACT_ADDRESS_PAIR_4',
      isStable: true,
      token0Amount: '157485051',
      token1Amount: '135613721',
      pairSettings: {
        lpFee: 0.01,
        daoFee: 0.02,
        stableParams: {
          priceRatio: '1.1234567',
          alpha: '200',
          gamma1: '6',
          gamma2: '50',
          oracle: {
            address: 'ORACLE_CONTRACT_ADDRESS_PAIR_4',
            codeHash: 'ORACLE_CODE_HASH_PAIR_4',
          },
          token0Data: {
            oracleKey: 'ORACLE_KEY',
            decimals: 5,
          },
          token1Data: {
            oracleKey: 'ORACLE_KEY',
            decimals: 5,
          },
          minTradeSizeXForY: '1e-9',
          minTradeSizeYForX: '1e-9',
          maxPriceImpactAllowed: '500',
          customIterationControls: null,
        },
      },
      contractVersion: 1,
    },
  },
  {
    pairContractAddress: 'CONTRACT_ADDRESS_PAIR_5',
    pairInfo: {
      lpTokenAmount: '0',
      lpTokenContract: {
        address: 'MOCK_LP_TOKEN_CONTRACT_ADDRESS_PAIR_5',
        codeHash: 'MOCK_LP_TOKEN_CODE_HASH_PAIR_5',
      },
      token0Contract: {
        address: 'TOKEN_A_CONTRACT_ADDRESS',
        codeHash: 'TOKEN_A_CODE_HASH',
      },
      token1Contract: {
        address: 'TOKEN_C_CONTRACT_ADDRESS',
        codeHash: 'TOKEN_C_CODE_HASH',
      },
      factoryContract: null,
      daoContractAddress: 'MOCK_DAO_CONTRACT_ADDRESS_PAIR_5',
      isStable: false,
      token0Amount: '157485051',
      token1Amount: '135613721',
      pairSettings: {
        lpFee: 0.04,
        daoFee: 0.16,
        stableParams: {
          priceRatio: '1.1234567',
          alpha: '200',
          gamma1: '6',
          gamma2: '50',
          oracle: {
            address: 'ORACLE_CONTRACT_ADDRESS_PAIR_5',
            codeHash: 'ORACLE_CODE_HASH_PAIR_5',
          },
          token0Data: {
            oracleKey: 'ORACLE_KEY',
            decimals: 5,
          },
          token1Data: {
            oracleKey: 'ORACLE_KEY',
            decimals: 5,
          },
          minTradeSizeXForY: '1e-9',
          minTradeSizeYForX: '1e-9',
          maxPriceImpactAllowed: '500',
          customIterationControls: null,
        },
      },
      contractVersion: 1,
    },
  },
  {
    pairContractAddress: 'CONTRACT_ADDRESS_PAIR_6',
    pairInfo: {
      lpTokenAmount: '145080056',
      lpTokenContract: {
        address: 'MOCK_LP_TOKEN_CONTRACT_ADDRESS_PAIR_6',
        codeHash: 'MOCK_LP_TOKEN_CODE_HASH_PAIR_6',
      },
      token0Contract: {
        address: 'TOKEN_D_CONTRACT_ADDRESS',
        codeHash: 'TOKEN_D_CODE_HASH',
      },
      token1Contract: {
        address: 'TOKEN_C_CONTRACT_ADDRESS',
        codeHash: 'TOKEN_C_CODE_HASH',
      },
      factoryContract: null,
      daoContractAddress: 'MOCK_DAO_CONTRACT_ADDRESS_PAIR_6',
      isStable: false,
      token0Amount: '157485051',
      token1Amount: '135613721',
      pairSettings: {
        lpFee: 0.04,
        daoFee: 0.16,
        stableParams: {
          priceRatio: '1.1234567',
          alpha: '200',
          gamma1: '6',
          gamma2: '50',
          oracle: {
            address: 'ORACLE_CONTRACT_ADDRESS_PAIR_6',
            codeHash: 'ORACLE_CODE_HASH_PAIR_6',
          },
          token0Data: {
            oracleKey: 'ORACLE_KEY',
            decimals: 5,
          },
          token1Data: {
            oracleKey: 'ORACLE_KEY',
            decimals: 5,
          },
          minTradeSizeXForY: '1e-9',
          minTradeSizeYForX: '1e-9',
          maxPriceImpactAllowed: '500',
          customIterationControls: null,
        },
      },
      contractVersion: 1,
    },
  },
  {
    pairContractAddress: 'CONTRACT_ADDRESS_PAIR_7',
    pairInfo: {
      lpTokenAmount: '145080056',
      lpTokenContract: {
        address: 'MOCK_LP_TOKEN_CONTRACT_ADDRESS_PAIR_7',
        codeHash: 'MOCK_LP_TOKEN_CODE_HASH_PAIR_7',
      },
      token0Contract: {
        address: 'TOKEN_A_CONTRACT_ADDRESS',
        codeHash: 'TOKEN_A_CODE_HASH',
      },
      token1Contract: {
        address: 'TOKEN_B_CONTRACT_ADDRESS',
        codeHash: 'TOKEN_B_CODE_HASH',
      },
      factoryContract: null,
      daoContractAddress: 'MOCK_DAO_CONTRACT_ADDRESS_PAIR_7',
      isStable: false,
      token0Amount: '157485051',
      token1Amount: '135613721',
      pairSettings: {
        lpFee: 0.04,
        daoFee: 0.16,
        stableParams: null,
      },
      contractVersion: 1,
    },
  },
  {
    pairContractAddress: 'CONTRACT_ADDRESS_PAIR_8',
    pairInfo: {
      lpTokenAmount: '145080056',
      lpTokenContract: {
        address: 'MOCK_LP_TOKEN_CONTRACT_ADDRESS_PAIR_8',
        codeHash: 'MOCK_LP_TOKEN_CODE_HASH_PAIR_8',
      },
      token0Contract: {
        address: 'TOKEN_D_CONTRACT_ADDRESS',
        codeHash: 'TOKEN_D_CODE_HASH',
      },
      token1Contract: {
        address: 'TOKEN_E_CONTRACT_ADDRESS',
        codeHash: 'TOKEN_E_CODE_HASH',
      },
      factoryContract: null,
      daoContractAddress: 'MOCK_DAO_CONTRACT_ADDRESS_PAIR_8',
      isStable: false,
      token0Amount: '157485051',
      token1Amount: '135613721',
      pairSettings: {
        lpFee: 0.04,
        daoFee: 0.16,
        stableParams: null,
      },
      contractVersion: 1,
    },
  },
  {
    pairContractAddress: 'CONTRACT_ADDRESS_PAIR_9',
    pairInfo: {
      lpTokenAmount: '145080056',
      lpTokenContract: {
        address: 'MOCK_LP_TOKEN_CONTRACT_ADDRESS_PAIR_8',
        codeHash: 'MOCK_LP_TOKEN_CODE_HASH_PAIR_8',
      },
      token0Contract: {
        address: 'TOKEN_C_CONTRACT_ADDRESS',
        codeHash: 'TOKEN_C_CODE_HASH',
      },
      token1Contract: {
        address: 'TOKEN_B_CONTRACT_ADDRESS',
        codeHash: 'TOKEN_B_CODE_HASH',
      },
      factoryContract: null,
      daoContractAddress: 'MOCK_DAO_CONTRACT_ADDRESS_PAIR_8',
      isStable: false,
      token0Amount: '157485051',
      token1Amount: '135613721',
      pairSettings: {
        lpFee: 0.04,
        daoFee: 0.16,
        stableParams: null,
      },
      contractVersion: 1,
    },
  },
  {
    pairContractAddress: 'CONTRACT_ADDRESS_PAIR_10',
    pairInfo: {
      lpTokenAmount: '145080056',
      lpTokenContract: {
        address: 'MOCK_LP_TOKEN_CONTRACT_ADDRESS_PAIR_10',
        codeHash: 'MOCK_LP_TOKEN_CODE_HASH_PAIR_10',
      },
      token0Contract: {
        address: 'TOKEN_C_CONTRACT_ADDRESS',
        codeHash: 'TOKEN_C_CODE_HASH',
      },
      token1Contract: {
        address: 'TOKEN_E_CONTRACT_ADDRESS',
        codeHash: 'TOKEN_E_CODE_HASH',
      },
      factoryContract: null,
      daoContractAddress: 'MOCK_DAO_CONTRACT_ADDRESS_PAIR_10',
      isStable: true,
      token0Amount: '157485051',
      token1Amount: '135613721',
      pairSettings: {
        lpFee: 0.01,
        daoFee: 0.01,
        stableParams: {
          priceRatio: '3',
          alpha: '200',
          gamma1: '6',
          gamma2: '50',
          oracle: {
            address: 'ORACLE_CONTRACT_ADDRESS_PAIR_10',
            codeHash: 'ORACLE_CODE_HASH_PAIR_10',
          },
          token0Data: {
            oracleKey: 'ORACLE_KEY',
            decimals: 5,
          },
          token1Data: {
            oracleKey: 'ORACLE_KEY',
            decimals: 5,
          },
          minTradeSizeXForY: '1e-9',
          minTradeSizeYForX: '1e-9',
          maxPriceImpactAllowed: '500',
          customIterationControls: null,
        },
      },
      contractVersion: 1,
    },
  },
  {
    pairContractAddress: 'CONTRACT_ADDRESS_PAIR_11',
    pairInfo: {
      lpTokenAmount: '145080056',
      lpTokenContract: {
        address: 'MOCK_LP_TOKEN_CONTRACT_ADDRESS_PAIR_11',
        codeHash: 'MOCK_LP_TOKEN_CODE_HASH_PAIR_11',
      },
      token0Contract: {
        address: 'TOKEN_B_CONTRACT_ADDRESS',
        codeHash: 'TOKEN_B_CODE_HASH',
      },
      token1Contract: {
        address: 'TOKEN_E_CONTRACT_ADDRESS',
        codeHash: 'TOKEN_E_CODE_HASH',
      },
      factoryContract: null,
      daoContractAddress: 'MOCK_DAO_CONTRACT_ADDRESS_PAIR_11',
      isStable: true,
      token0Amount: '157485051',
      token1Amount: '135613721',
      pairSettings: {
        lpFee: 0.01,
        daoFee: 0.01,
        stableParams: {
          priceRatio: '3',
          alpha: '200',
          gamma1: '6',
          gamma2: '50',
          oracle: {
            address: 'ORACLE_CONTRACT_ADDRESS_PAIR_11',
            codeHash: 'ORACLE_CODE_HASH_PAIR_11',
          },
          token0Data: {
            oracleKey: 'ORACLE_KEY',
            decimals: 5,
          },
          token1Data: {
            oracleKey: 'ORACLE_KEY',
            decimals: 5,
          },
          minTradeSizeXForY: '1e-9',
          minTradeSizeYForX: '1e-9',
          maxPriceImpactAllowed: '500',
          customIterationControls: null,
        },
      },
      contractVersion: 1,
    },
  },
];

const tokenConfigMock:TokensConfig = [
  {
    tokenContractAddress: 'TOKEN_A_CONTRACT_ADDRESS',
    decimals: 6,
  },
  {
    tokenContractAddress: 'TOKEN_B_CONTRACT_ADDRESS',
    decimals: 6,
  },
  {
    tokenContractAddress: 'TOKEN_C_CONTRACT_ADDRESS',
    decimals: 6,
  },
  {
    tokenContractAddress: 'TOKEN_D_CONTRACT_ADDRESS',
    decimals: 6,
  },
  {
    tokenContractAddress: 'TOKEN_E_CONTRACT_ADDRESS',
    decimals: 6,
  },
  {
    tokenContractAddress: 'TOKEN_F_CONTRACT_ADDRESS',
    decimals: 6,
  },
  {
    tokenContractAddress: 'TOKEN_G_CONTRACT_ADDRESS',
    decimals: 6,
  },
  {
    tokenContractAddress: 'TOKEN_H_CONTRACT_ADDRESS',
    decimals: 6,
  },
  {
    tokenContractAddress: 'TOKEN_I_CONTRACT_ADDRESS',
    decimals: 6,
  },
  {
    tokenContractAddress: 'TOKEN_J_CONTRACT_ADDRESS',
    decimals: 6,
  },
  {
    tokenContractAddress: 'TOKEN_K_CONTRACT_ADDRESS',
    decimals: 6,
  },
  {
    tokenContractAddress: 'TOKEN_L_CONTRACT_ADDRESS',
    decimals: 6,
  },
  {
    tokenContractAddress: 'TOKEN_M_CONTRACT_ADDRESS',
    decimals: 6,
  },
  {
    tokenContractAddress: 'TOKEN_N_CONTRACT_ADDRESS',
    decimals: 6,
  },
  {
    tokenContractAddress: 'TOKEN_O_CONTRACT_ADDRESS',
    decimals: 6,
  },
  {
    tokenContractAddress: 'TOKEN_P_CONTRACT_ADDRESS',
    decimals: 6,
  },
  {
    tokenContractAddress: 'TOKEN_Q_CONTRACT_ADDRESS',
    decimals: 6,
  },
  {
    tokenContractAddress: 'TOKEN_R_CONTRACT_ADDRESS',
    decimals: 6,
  },
  {
    tokenContractAddress: 'TOKEN_S_CONTRACT_ADDRESS',
    decimals: 6,
  },
  {
    tokenContractAddress: 'TOKEN_T_CONTRACT_ADDRESS',
    decimals: 6,
  },
];

export {
  tokenConfigMock,
  batchPairsInfoMock,
  batchPairsInfoMockForComplexRoute,
};
