import { Client } from 'pg';

export class Database {
    private client: Client;

    constructor(host: string, user: string, password: string, database: string, port: number = 5432) {
        this.client = new Client({
            host,
            user,
            password,
            database,
            port,
        });
    }

    async connect() {
        try {
            await this.client.connect();
            console.log('Connected to PostgreSQL database');
        } catch (error) {
            console.error('Failed to connect to database:', error);
        }
    }

    async query(sql: string, params?: any[]) {
        try {
            const result = await this.client.query(sql, params);
            return result.rows;
        } catch (error) {
            console.error('Query execution error:', error);
            throw error;
        }
    }

    async close() {
        await this.client.end();
        console.log('Database connection closed');
    }
}
