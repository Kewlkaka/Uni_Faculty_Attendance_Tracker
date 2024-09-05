import {db} from './model/index.js';

const updateRecordsToUnix = async () => {
    const records = await db.Attendance.find({}).exec();
    const bulkOps = records.map(record => {
        return {
            updateOne: {
                filter: { _id: record._id },
                update: { date: record.date.getTime() }
            }
        };
    });

    await db.Attendance.bulkWrite(bulkOps);
    console.log('Records updated successfully');
};

updateRecordsToUnix();
