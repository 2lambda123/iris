/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('spec_a').del()
  await knex('spec_a').insert([
    {id: 1, server_id: 1, team_id: 1, unit: 1, number: 1, operational: true, frequency: 1250, span: 50, trace: true, marker1freq: 1240, marker2freq: 1260},
    {id: 2, server_id: 1, team_id: 1, unit: 1, number: 2, operational: true, frequency: 1250, span: 50, trace: true, marker1freq: 1240, marker2freq: 1260},
    {id: 3, server_id: 1, team_id: 1, unit: 2, number: 1, operational: true, frequency: 1250, span: 50, trace: true, marker1freq: 1240, marker2freq: 1260},
    {id: 4, server_id: 1, team_id: 1, unit: 2, number: 2, operational: true, frequency: 1250, span: 50, trace: true, marker1freq: 1240, marker2freq: 1260},
    {id: 5, server_id: 1, team_id: 1, unit: 3, number: 1, operational: true, frequency: 1250, span: 50, trace: true, marker1freq: 1240, marker2freq: 1260},
    {id: 6, server_id: 1, team_id: 1, unit: 3, number: 2, operational: true, frequency: 1250, span: 50, trace: true, marker1freq: 1240, marker2freq: 1260},
    {id: 7, server_id: 1, team_id: 1, unit: 4, number: 1, operational: true, frequency: 1250, span: 50, trace: true, marker1freq: 1240, marker2freq: 1260},
    {id: 8, server_id: 1, team_id: 1, unit: 4, number: 2, operational: true, frequency: 1250, span: 50, trace: true, marker1freq: 1240, marker2freq: 1260},
    {id: 9, server_id: 1, team_id: 2, unit: 1, number: 1, operational: true, frequency: 1250, span: 50, trace: true, marker1freq: 1240, marker2freq: 1260},
    {id: 10, server_id: 1, team_id: 2, unit: 1, number: 2, operational: true, frequency: 1250, span: 50, trace: true, marker1freq: 1240, marker2freq: 1260},
    {id: 11, server_id: 1, team_id: 2, unit: 2, number: 1, operational: true, frequency: 1250, span: 50, trace: true, marker1freq: 1240, marker2freq: 1260},
    {id: 12, server_id: 1, team_id: 2, unit: 2, number: 2, operational: true, frequency: 1250, span: 50, trace: true, marker1freq: 1240, marker2freq: 1260},
    {id: 13, server_id: 1, team_id: 2, unit: 3, number: 1, operational: true, frequency: 1250, span: 50, trace: true, marker1freq: 1240, marker2freq: 1260},
    {id: 14, server_id: 1, team_id: 2, unit: 3, number: 2, operational: true, frequency: 1250, span: 50, trace: true, marker1freq: 1240, marker2freq: 1260},
    {id: 15, server_id: 1, team_id: 2, unit: 4, number: 1, operational: true, frequency: 1250, span: 50, trace: true, marker1freq: 1240, marker2freq: 1260},
    {id: 16, server_id: 1, team_id: 2, unit: 4, number: 2, operational: true, frequency: 1250, span: 50, trace: true, marker1freq: 1240, marker2freq: 1260},
    {id: 17, server_id: 1, team_id: 3, unit: 1, number: 1, operational: true, frequency: 1250, span: 50, trace: true, marker1freq: 1240, marker2freq: 1260},
    {id: 18, server_id: 1, team_id: 3, unit: 1, number: 2, operational: true, frequency: 1250, span: 50, trace: true, marker1freq: 1240, marker2freq: 1260},
    {id: 19, server_id: 1, team_id: 3, unit: 2, number: 1, operational: true, frequency: 1250, span: 50, trace: true, marker1freq: 1240, marker2freq: 1260},
    {id: 20, server_id: 1, team_id: 3, unit: 2, number: 2, operational: true, frequency: 1250, span: 50, trace: true, marker1freq: 1240, marker2freq: 1260},
    {id: 21, server_id: 1, team_id: 3, unit: 3, number: 1, operational: true, frequency: 1250, span: 50, trace: true, marker1freq: 1240, marker2freq: 1260},
    {id: 22, server_id: 1, team_id: 3, unit: 3, number: 2, operational: true, frequency: 1250, span: 50, trace: true, marker1freq: 1240, marker2freq: 1260},
    {id: 23, server_id: 1, team_id: 3, unit: 4, number: 1, operational: true, frequency: 1250, span: 50, trace: true, marker1freq: 1240, marker2freq: 1260},
    {id: 24, server_id: 1, team_id: 3, unit: 4, number: 2, operational: true, frequency: 1250, span: 50, trace: true, marker1freq: 1240, marker2freq: 1260},
    {id: 25, server_id: 1, team_id: 4, unit: 1, number: 1, operational: true, frequency: 1250, span: 50, trace: true, marker1freq: 1240, marker2freq: 1260},
    {id: 26, server_id: 1, team_id: 4, unit: 1, number: 2, operational: true, frequency: 1250, span: 50, trace: true, marker1freq: 1240, marker2freq: 1260},
    {id: 27, server_id: 1, team_id: 4, unit: 2, number: 1, operational: true, frequency: 1250, span: 50, trace: true, marker1freq: 1240, marker2freq: 1260},
    {id: 28, server_id: 1, team_id: 4, unit: 2, number: 2, operational: true, frequency: 1250, span: 50, trace: true, marker1freq: 1240, marker2freq: 1260},
    {id: 29, server_id: 1, team_id: 4, unit: 3, number: 1, operational: true, frequency: 1250, span: 50, trace: true, marker1freq: 1240, marker2freq: 1260},
    {id: 30, server_id: 1, team_id: 4, unit: 3, number: 2, operational: true, frequency: 1250, span: 50, trace: true, marker1freq: 1240, marker2freq: 1260},
    {id: 31, server_id: 1, team_id: 4, unit: 4, number: 1, operational: true, frequency: 1250, span: 50, trace: true, marker1freq: 1240, marker2freq: 1260},
    {id: 32, server_id: 1, team_id: 4, unit: 4, number: 2, operational: true, frequency: 1250, span: 50, trace: true, marker1freq: 1240, marker2freq: 1260}
  ]);
  await knex.raw('SELECT SETVAL(pg_get_serial_sequence(\'spec_a\',\'id\'), (SELECT MAX(id) FROM spec_a) )');
};
