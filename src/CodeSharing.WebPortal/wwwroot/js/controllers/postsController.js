var postsController = function () {
    this.initialize = function () {
        var postId = parseInt($('#hid_post_id').val());
        loadComments(postId);
        registerEvents();
    }

    function registerEvents() {
        // This is the id of the form
        $("#commentform").submit(function (e) {
            e.preventDefault(); // avoid to execute the actual submit of the form.

            var form = $(this);
            var url = form.attr('action');

            $.post(url, form.serialize()).done(function (response) {
                var content = $("#txt_new_comment_content").val();
                
                var template = $('#tmpl_comments').html();
                var newComment = Mustache.render(template, {
                    id: response.id,
                    content: content,
                    createDate: formatRelativeTime(),
                    ownerName: $('#hid_current_login_name').val()
                });

                $("#txt_new_comment_content").val('');
                $('#comment_list').prepend(newComment);
                var numberOfComments = parseInt($('#hid_number_comments').val()) + 1;
                $('#hid_number_comments').val(numberOfComments);
                $('#comments-title').text('Các bình luận (' + numberOfComments + ')');
            });
        });

        // Binding reply comment event
        $('body').on('click', '.comment-reply-link', function (e) {
            e.preventDefault();

            var commentId = $(this).data('commentid');
            var template = $('#tmpl_reply_comment').html();
            var html = Mustache.render(template, {
                commentId: commentId
            });

            $('#reply_comment_' + commentId).html(html);

            // This is the id of the form
            $("#frm_reply_comment_" + commentId).submit(function (e) {
                e.preventDefault(); // avoid to execute the actual submit of the form.

                var form = $(this);
                var url = form.attr('action');

                $.post(url, form.serialize()).done(function (response) {
                    var content = $("#txt_reply_content_" + commentId).val();
                    var template = $('#tmpl_children_comments').html();

                    var newComment = Mustache.render(template, {
                        id: commentId,
                        content: content,
                        createDate: formatRelativeTime(),
                        ownerName: $('#hid_current_login_name').val()
                    });

                    // Reset reply comment
                    $("#txt_reply_content_" + commentId).val('');
                    $('#reply_comment_' + commentId).html('');

                    // Prepend new comment to children
                    $('#children_comments_' + commentId).prepend(newComment);

                    // Update number of comment
                    var numberOfComments = parseInt($('#hid_number_comments').val()) + 1;
                    $('#hid_number_comments').val(numberOfComments);
                    $('#comments-title').text('Các bình luận (' + numberOfComments + ')');
                });
            });
        });

        $('#frm_vote').submit(function (e) {
            e.preventDefault();
            var form = $(this);
            $.post('/post/postVote', form.serialize()).done(function (response) {
                $('.like-it').text(response);
                $('.like-count').text(response);
            });
        });
        $('#frm_vote .like-it').click(function () {
            $('#frm_vote').submit();
        });
    }

    function loadComments(id) {
        $.get('/post/GetCommentByPostId?postId=' + id).done(function (response, statusText, xhr) {
            if (xhr.status === 200) {
                var template = $('#tmpl_comments').html();
                var childrenTemplate = $('#tmpl_children_comments').html();
                if (response) {
                    var html = '';
                    $.each(response, function (index, item) {
                        var childrenHtml = '';
                        if (item.children.length > 0) {
                            $.each(item.children, function (childIndex, childItem) {
                                childrenHtml += Mustache.render(childrenTemplate, {
                                    id: childItem.id,
                                    content: childItem.content,
                                    createDate: formatRelativeTime(childItem.createDate),
                                    ownerName: childItem.ownerName
                                });
                            });
                        }
                        html += Mustache.render(template, {
                            childrenHtml: childrenHtml,
                            id: item.id,
                            content: item.content,
                            createDate: formatRelativeTime(item.createDate),
                            ownerName: item.ownerName
                        });
                    });
                    $('#comment_list').html(html);
                }
            }
        });
    }

    function formatRelativeTime(fromDate) {
        if (fromDate === undefined)
            fromDate = new Date();
        if (!(fromDate instanceof Date))
            fromDate = new Date(fromDate);
        var msPerMinute = 60 * 1000;
        var msPerHour = msPerMinute * 60;
        var msPerDay = msPerHour * 24;
        var msPerMonth = msPerDay * 30;
        var msPerYear = msPerDay * 365;

        var elapsed = new Date() - fromDate;

        if (elapsed < msPerMinute) {
            return Math.round(elapsed / 1000) + ' giây trước';
        }

        else if (elapsed < msPerHour) {
            return Math.round(elapsed / msPerMinute) + ' phút trước';
        }

        else if (elapsed < msPerDay) {
            return Math.round(elapsed / msPerHour) + ' giờ trước';
        }

        else if (elapsed < msPerMonth) {
            return 'approximately ' + Math.round(elapsed / msPerDay) + ' ngày trước';
        }

        else if (elapsed < msPerYear) {
            return 'approximately ' + Math.round(elapsed / msPerMonth) + ' tháng trước';
        }

        else {
            return 'approximately ' + Math.round(elapsed / msPerYear) + ' năm trước';
        }
    }
};