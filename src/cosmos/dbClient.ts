import cosmos from '@azure/cosmos'
import url from 'url';
const dbConfig = require('./dbConfig');

const endpoint = dbConfig.endpoint;
const masterKey = dbConfig.primaryKey;
const HttpStatusCodes = { NOTFOUND: 404 };
const databaseId = dbConfig.database.id;
const containerId = dbConfig.container.id;
const partitionKey = { kind: "Hash", paths: ["/Country"] };

const CosmosClient = cosmos.CosmosClient; 
const dbClient = new CosmosClient({ endpoint: endpoint, auth: { masterKey: masterKey } });
export default dbClient;

async function createFamilyItem(itemBody: any) {
    const { item } = await dbClient.database(databaseId).container(containerId).items.upsert(itemBody);
    return item;
};

async function queryContainer() {
    console.log(`Querying container:\n${dbConfig.container.id}`);

    const querySpec = {
        query: "SELECT VALUE r.children FROM root r WHERE r.lastName = @lastName",
        parameters: [
            {
                name: "@lastName",
                value: "Andersen"
            }
        ]
    };

    const { result: results } = await dbClient.database(databaseId).container(containerId).items.query(querySpec, {enableCrossPartitionQuery:true}).toArray();
    if (results) {
        for (var queryResult of results) {
            let resultString: any = JSON.stringify(queryResult);
            return resultString;
        }
    } else { return null }
    
};

async function replaceFamilyItem(itemBody: any) {
    console.log(`Replacing item:\n${itemBody.id}\n`);
    itemBody.children[0].grade = 6;
    const { item } = await dbClient.database(databaseId).container(containerId).item(itemBody.id, itemBody.Country).replace(itemBody);
};

async function deleteFamilyItem(itemBody: any) {
    await dbClient.database(databaseId).container(containerId).item(itemBody.id, itemBody.Country).delete(itemBody);
};


async function cleanup() {
    await dbClient.database(databaseId).delete();
}