import { interval, map, take, tap } from "rxjs";
import * as etl from './lib';


console.log("START");

async function f() {
    try {


        const timer$ = interval(1000);
        const buf = new etl.BufferEndpoint<number>();
        const bufArrays = new etl.BufferEndpoint<any[]>([0,1], [2,3], [3,6]);
        const table = new etl.PostgresEndpoint("users", "postgres://iiicrm:iiicrm@127.0.0.1:5432/iiicrm");
        const csv = new etl.CsvEndpoint('data/test.csv');
        const json = new etl.JsonEndpoint('data/test.json');
        const xml = new etl.XmlEndpoint('data/test.xml');
        const telegram = new etl.TelegramEndpoint("");

        // '$.store.book[*].author'
        // json.readByJsonPath('$.store.book[*].author')
        // xml.read('/store/book/author')
        //let test$ = xml.read('store', {searchReturns: 'foundedWithDescendants', addRelativePathAsAttribute: "path"})
        let test$ = telegram.read()
        .pipe(
            // etl.numerate("index", "value", 10),
            //map(v => (v.)), 
            
            etl.log(),
            etl.push(telegram)
            //etl.join(table.read().pipe(take(2))),
            //etl.join(bufArrays.read()),
            //tap(() => (0))

            //map(v => v.firstChild.nodeValue),
            //xml.logNode(),
        )

        telegram
        .on("read.start", () => console.log("start11"))
        .on("read.end", () => console.log("end11"))
        .on("read.data", (data) => console.log("data11", data))
        .on("read.up", () => console.log("up11"))
        .on("read.down", () => console.log("down11"))
        .on("read.error", (err) => console.log("error11: " + err))

        await etl.run(test$);// .toPromise();
        console.log("END");


    }
    catch (err) {
        console.log("ERROR: ", err);
    }
}
f();