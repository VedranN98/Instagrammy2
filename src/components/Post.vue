<template>
    
    <div class="post">
        <div class="card">
            <div id="header" class="card-header text-left">
                <img class="rounded-circle" width="30" height="30" src="\gold-tooth.jpg"
                 alt="Čovjek sa zlatnim zubima."/> ZlatniZubić
            </div>
            
            <div class="card-body p-0">
                <img class="card-img-top" src="\coffee.jpg" alt="Kava"/>
            </div>
            <div class="card-footer text-muted text-left">
                <div class="footer">
                    <i class="far fa-heart"></i>
                    <i class="far fa-comment"></i>
                    <i class="fas fa-share-alt"></i>
                    <i class="far fa-bookmark" id="bookmark"></i>
                </div>

                <div>Komentiraj...</div>
            </div>
        </div>
    </div>
   

</template>


<style lang="css">
    .card-footer{
        padding: .75rem 0;
    }
    .footer{
        display: flex;
        flex-direction: row;
        border-bottom: 1px lightgrey solid;
        
    }
    i{
        color:black;
        padding: 0 8px;
        padding-bottom: 12px;
    }
    #bookmark{
        position: absolute;
        right: 0px;
        margin-right: 15px;
    }
    #header{
        background-color: white;
    }
</style>