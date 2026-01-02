package com.meme.backend.service;

import com.meme.backend.domain.Meme;
import com.meme.backend.exception.MemeNotFoundException;
import com.meme.backend.repository.MemeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CommunityService {

    private final MemeRepository memeRepository;

    /**
     * ⭐ 좋아요 순 TOP 5
     */
    public List<Meme> getTopList() {
        return memeRepository
                .findAll(Sort.by(Sort.Direction.DESC, "likes")) // likes 내림차순 정렬
                .stream()
                .limit(5)   // 명세: 최대 5개
                .toList();
    }

    /**
     * ❤️ 좋아요 +1 (로그인 X, 중복 허용)
     */
    @Transactional
    public Meme increaseLike(Long id) {
        Meme meme = memeRepository.findById(id)
                .orElseThrow(() -> new MemeNotFoundException(id));

        meme.setLikes(meme.getLikes() + 1);   // 여기서 setter 필요

        // @Transactional이라 save 없어도 되지만, 명시적으로 저장해 줌
        return memeRepository.save(meme);
    }
}
