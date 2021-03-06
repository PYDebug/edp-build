/***************************************************************************
 *
 * Copyright (c) 2013 Baidu.com, Inc. All Rights Reserved
 * $Id$
 *
 **************************************************************************/



/**
 * is-relative-path.spec.js ~ 2013/09/28 21:30:19
 * @author leeight(liyubei@baidu.com)
 * @version $Revision$
 * @description
 *
 **/
var expect = require('expect.js');

var isRelativePath = require('../node_modules/edp-core').path.isRelativePath;

describe('is-relative-path', function() {
    it('default', function() {
        expect(isRelativePath('a.jpg')).to.be(true);
        expect(isRelativePath('./a.jpg')).to.be(true);
        expect(isRelativePath('../a.jpg')).to.be(true);
        expect(isRelativePath('//www.google.com/a.jpg')).to.be(false);
        expect(isRelativePath('http://www.google.com/a.jpg')).to.be(false);
        expect(isRelativePath('https://www.google.com/a.jpg')).to.be(false);
    });
});




















/* vim: set ts=4 sw=4 sts=4 tw=100: */
