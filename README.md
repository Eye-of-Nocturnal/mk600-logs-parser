# Node.js MK 600 Logs Parser

## Usage

1. Make sure `mk600logger` is installed, use `mk600logger --version` (version >=0.6.3 is required)
1. Make sure MK 600 is connected
1. Run `npm install` and then `npm start`, and follow the instructions from your command prompt
1. After that you can find compressed and encrypted logs in `logs` directory, you can find password on the bottom panel of your MK 600 device

## Logs Extraction

Use `./scripts/unwrap.sh ./logs/*your_log_file*.log` to extract logs
