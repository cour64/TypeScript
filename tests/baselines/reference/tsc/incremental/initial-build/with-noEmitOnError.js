//// [/lib/initial-buildOutput.txt]
/lib/tsc --incremental -p src
[96msrc/src/main.ts[0m:[93m4[0m:[93m1[0m - [91merror[0m[90m TS1005: [0m',' expected.

[7m4[0m ;
[7m [0m [91m~[0m

  [96msrc/src/main.ts[0m:[93m2[0m:[93m11[0m
    [7m2[0m const a = {
    [7m [0m [96m          ~[0m
    The parser expected to find a '}' to match the '{' token here.


Found 1 error.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped
Program root files: ["/src/shared/types/db.ts","/src/src/main.ts","/src/src/other.ts"]
Program options: {"outDir":"/src/dev-build","noEmitOnError":true,"incremental":true,"project":"/src","configFilePath":"/src/tsconfig.json"}
Program files::
/lib/lib.d.ts
/src/shared/types/db.ts
/src/src/main.ts
/src/src/other.ts

Semantic diagnostics in builder refreshed for::
/lib/lib.d.ts
/src/shared/types/db.ts
/src/src/main.ts
/src/src/other.ts


