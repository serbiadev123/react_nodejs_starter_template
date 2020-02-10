import { Server } from '../../ServerDefinition'
import * as chai from 'chai'
import chaiHttp = require('chai-http')
const { expect } = chai

let server

chai.use(chaiHttp)

describe('Hello API Request', () => {
    before(function() {
        server = new Server(3342)
    })

    after(function() {
        server.server.close()
    })

    it('should return response on call', (done) => {
        chai
            .request(server.getApp())
            .get('/api/test')
            .end((err, res) => {
                expect(res.text).to.eql(JSON.stringify({ message: 'test' }))
                done()
            })
    })

    it('should return response on call2', (done) => {
        chai
            .request(server.getApp())
            .get('/api/test')
            .end((err, res) => {
                expect(res.text).to.eql(JSON.stringify({ message: 'test' }))
                done()
            })
    })
})
